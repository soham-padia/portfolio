import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const toId = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Solid background — no dot grid; reset title on unmount
  useEffect(() => {
    document.body.classList.add('blog-page');
    return () => {
      document.body.classList.remove('blog-page');
      document.title = 'Soham Padia – ML Engineer & Researcher (Northeastern University)';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', 'Soham Padia is a Master\'s student in AI at Northeastern University. Projects and publications in Machine Learning, NLP, Computer Vision, Reinforcement Learning, and full-stack development.');
    };
  }, []);

  // Load post
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}blog/posts.json`);
        const posts = await res.json();
        const post = posts.find(p => p.slug === slug);
        if (!post) { navigate('/blog', { replace: true }); return; }
        setMeta(post);

        // Update page title and meta description for this post
        document.title = `${post.title} — Soham Padia`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

        const mdRes = await fetch(`${import.meta.env.BASE_URL}blog/${post.file}`);
        if (!mdRes.ok) throw new Error();
        setContent(await mdRes.text());
      } catch {
        setError(true);
      }
    }
    load();
  }, [slug]);

  // Track active heading via IntersectionObserver
  useEffect(() => {
    if (!content) return;
    const headingEls = document.querySelectorAll('.prose-blog h2, .prose-blog h3');
    if (!headingEls.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-10% 0% -80% 0%' }
    );
    headingEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [content]);

  // Extract headings from raw markdown for the ToC
  const headings = useMemo(() => {
    return content
      .split('\n')
      .filter(l => /^#{2,3}\s/.test(l))
      .map(l => {
        const m = l.match(/^(#{2,3})\s+(.+)/);
        if (!m) return null;
        return { level: m[1].length, text: m[2], id: toId(m[2]) };
      })
      .filter(Boolean);
  }, [content]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-500">Post not found.</p>
      </div>
    );
  }

  const imageBase = meta
    ? `${import.meta.env.BASE_URL}blog/${meta.file.split('/')[0]}/`
    : `${import.meta.env.BASE_URL}blog/`;

  const components = {
    img({ src, alt }) {
      const resolved = src?.startsWith('http') ? src : imageBase + src;
      return (
        <figure className="my-10 text-center">
          <img src={resolved} alt={alt} className="mx-auto max-w-full" />
          {alt && (
            <figcaption className="mt-3 text-sm italic text-slate-400 dark:text-slate-500">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },
    h2({ children }) {
      const id = toId(children);
      return <h2 id={id}>{children}</h2>;
    },
    h3({ children }) {
      const id = toId(children);
      return <h3 id={id}>{children}</h3>;
    },
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pb-32 pt-16">
        <div className="flex gap-16">

          {/* ── Main content ── */}
          <div className="min-w-0 w-full max-w-[720px]">
            <Link
              to="/blog"
              className="font-meta mb-12 inline-block text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
            >
              ← All posts
            </Link>

            {meta && (
              <div className="mb-3 font-meta text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {meta.date}{meta.tags?.length ? ' · ' + meta.tags.join(' · ') : ''}
              </div>
            )}

            {/* Author byline */}
            <div className="mb-8 flex flex-wrap gap-x-3 gap-y-1 font-meta text-xs text-slate-400 dark:text-slate-500">
              <a href="mailto:sohampadia10@gmail.com" className="transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                sohampadia10@gmail.com
              </a>
              <span className="select-none">·</span>
              <a href="mailto:padia.so@northeastern.edu" className="transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                padia.so@northeastern.edu
              </a>
            </div>

            <div className="prose-blog">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* ── Sticky ToC sidebar ── */}
          {headings.length > 0 && (
            <aside className="hidden xl:block w-52 flex-shrink-0">
              <div className="sticky top-10">
                <p className="font-meta mb-3 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Contents
                </p>
                <nav className="flex flex-col gap-0.5">
                  {headings.map(h => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      onClick={e => {
                        e.preventDefault();
                        document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={[
                        'block py-0.5 text-sm leading-snug transition-colors',
                        h.level === 3 ? 'pl-3' : '',
                        activeId === h.id
                          ? 'text-slate-900 dark:text-white font-medium'
                          : 'text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300',
                      ].join(' ')}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

        </div>
      </div>
    </div>
  );
};
