// src/components/AIAssistant.jsx
import React, { useEffect, useRef, useState } from "react";
import { Glass, GlassButton, GlassPill } from "./glass";

const SPACE = "https://sohampadianeu-ai-twin.hf.space";

async function callEndpoint(apiName, data) {
  const startRes = await fetch(`${SPACE}/gradio_api/call/${apiName}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  if (!startRes.ok) {
    throw new Error(`Start request failed (${startRes.status})`);
  }

  const startJson = await startRes.json();
  const eventId = startJson?.event_id;
  if (!eventId) {
    throw new Error("No event_id received from HF Space");
  }

  const streamRes = await fetch(`${SPACE}/gradio_api/call/${apiName}/${eventId}`, {
    headers: { Accept: "text/event-stream" },
  });

  if (!streamRes.ok || !streamRes.body) {
    throw new Error(`Stream request failed (${streamRes.status})`);
  }

  const reader = streamRes.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let lastPayload = null;

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split("\n\n");
    buffer = chunks.pop() || "";

    for (const chunk of chunks) {
      const lines = chunk.split("\n");
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          lastPayload = JSON.parse(payload);
        } catch {
          // ignore non-JSON payload lines
        }
      }
    }
  }

  if (!lastPayload) return null;
  if (lastPayload?.output?.data) return lastPayload.output.data;
  if (lastPayload?.data) return lastPayload.data;
  if (lastPayload?.output) return lastPayload.output;
  return lastPayload;
}

function findLastString(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    for (let i = value.length - 1; i >= 0; i -= 1) {
      const found = findLastString(value[i]);
      if (found) return found;
    }
    return "";
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    for (let i = keys.length - 1; i >= 0; i -= 1) {
      const found = findLastString(value[keys[i]]);
      if (found) return found;
    }
  }
  return "";
}

function stringifyOutput(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("chat");

  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Ask me about Soham's experience, projects, publications, or internship fit.",
    },
  ]);
  const [history, setHistory] = useState([]);

  const [jobText, setJobText] = useState("");
  const [jobLoading, setJobLoading] = useState(false);
  const [jobError, setJobError] = useState("");
  const [jobResult, setJobResult] = useState("");

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onSendChat = async () => {
    const question = chatInput.trim();
    if (!question || chatLoading) return;

    setChatError("");
    setChatInput("");
    setChatLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: question }]);

    try {
      const output = await callEndpoint("chat", [question, history]);
      const answer = findLastString(output) || "I received a response but could not parse it cleanly.";
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
      setHistory((prev) => [...prev, [question, answer]]);
    } catch (err) {
      setChatError(err?.message || "Could not reach AI Twin right now.");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "I am temporarily unavailable. Please try again in a moment." },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const onAnalyzeJob = async () => {
    const jd = jobText.trim();
    if (!jd || jobLoading) return;

    setJobError("");
    setJobResult("");
    setJobLoading(true);

    try {
      const output = await callEndpoint("job_fit", [jd]);
      const parsed = findLastString(output) || stringifyOutput(output);
      setJobResult(parsed || "No structured output returned.");
    } catch (err) {
      setJobError(err?.message || "Could not run job-fit analysis.");
    } finally {
      setJobLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[70]">
        <GlassButton onClick={() => setOpen(true)} className="shadow-lg">
          AI Twin
        </GlassButton>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setOpen(false)}
        >
          <div className="mx-auto mt-8 md:mt-14 max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Glass className="p-4 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-3xl font-semibold">Soham AI Twin</h3>
                  <p className="text-sm opacity-75">Chat or run role-fit analysis.</p>
                </div>
                <GlassButton variant="secondary" onClick={() => setOpen(false)}>
                  Close
                </GlassButton>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <GlassButton
                  onClick={() => setMode("chat")}
                  variant={mode === "chat" ? "primary" : "secondary"}
                >
                  Chat
                </GlassButton>
                <GlassButton
                  onClick={() => setMode("job_fit")}
                  variant={mode === "job_fit" ? "primary" : "secondary"}
                >
                  Job Fit
                </GlassButton>
              </div>

              {mode === "chat" ? (
                <div className="mt-4">
                  <div className="h-[320px] overflow-y-auto rounded-xl bg-black/5 p-3 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/15">
                    <div className="space-y-3">
                      {messages.map((m, idx) => (
                        <div
                          key={`${m.role}-${idx}`}
                          className={`max-w-[92%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap ${
                            m.role === "user"
                              ? "ml-auto bg-emerald-500/15 text-slate-900 ring-1 ring-emerald-500/30 dark:text-white"
                              : "mr-auto bg-black/5 text-slate-800 ring-1 ring-black/10 dark:bg-white/8 dark:text-white/90 dark:ring-white/20"
                          }`}
                        >
                          {m.text}
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>
                  </div>

                  {chatError && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-300">{chatError}</p>
                  )}

                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") onSendChat();
                      }}
                      placeholder="Ask about projects, research, skills, internships..."
                      className="w-full rounded-xl bg-black/5 px-3 py-2 text-sm outline-none ring-1 ring-black/10 placeholder:text-slate-500 focus:ring-emerald-400/40 dark:bg-white/10 dark:ring-white/20 dark:placeholder:text-white/45"
                    />
                    <GlassButton onClick={onSendChat} disabled={chatLoading}>
                      {chatLoading ? "Sending..." : "Send"}
                    </GlassButton>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-sm opacity-80">
                    Paste a job description to get role-fit feedback based on Soham&apos;s profile.
                  </p>
                  <textarea
                    value={jobText}
                    onChange={(e) => setJobText(e.target.value)}
                    placeholder="Paste job description here..."
                    className="mt-2 h-44 w-full resize-y rounded-xl bg-black/5 px-3 py-2 text-sm outline-none ring-1 ring-black/10 placeholder:text-slate-500 focus:ring-emerald-400/40 dark:bg-white/10 dark:ring-white/20 dark:placeholder:text-white/45"
                  />
                  <div className="mt-3 flex items-center gap-2">
                    <GlassButton onClick={onAnalyzeJob} disabled={jobLoading}>
                      {jobLoading ? "Analyzing..." : "Analyze Fit"}
                    </GlassButton>
                    <GlassPill>Mode: job_fit</GlassPill>
                  </div>
                  {jobError && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-300">{jobError}</p>
                  )}
                  {jobResult && (
                    <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-black/5 p-3 text-sm leading-relaxed ring-1 ring-black/10 dark:bg-white/8 dark:ring-white/20">
                      {jobResult}
                    </pre>
                  )}
                </div>
              )}
            </Glass>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
