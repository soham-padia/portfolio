import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BlogIndex = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('blog-page');
    return () => document.body.classList.remove('blog-page');
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}blog/posts.json`)
      .then(r => r.json())
      .then(setPosts)
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[680px] px-5 pb-32 pt-16">

        {/* Minimal back link */}
        <Link
          to="/"
          className="font-meta mb-12 inline-block text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
        >
          ← Soham Padia
        </Link>

        <h1 className="font-display mb-2 text-4xl font-semibold text-slate-900 dark:text-white">
          Blog
        </h1>
        <p className="mb-14 text-sm text-slate-400 dark:text-slate-500">
          Notes on research, experiments, and ideas.
        </p>

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className="group cursor-pointer py-10"
              onClick={() => navigate(`/blog/${post.slug}`)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="mb-3 font-meta text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {post.date}{post.tags?.length ? ' · ' + post.tags.join(' · ') : ''}
              </div>
              <h2 className="font-display mb-3 text-2xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                {post.title}
              </h2>
              {post.epistemicStatus && (
                <p className="mb-3 text-sm italic text-slate-400 dark:text-slate-500">
                  Epistemic status: {post.epistemicStatus}
                </p>
              )}
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block font-meta text-xs text-emerald-600 transition-colors group-hover:text-emerald-500 dark:text-emerald-500 dark:group-hover:text-emerald-400">
                Read →
              </span>
            </motion.article>
          ))}

          {posts.length === 0 && (
            <p className="py-10 text-slate-400 dark:text-slate-500">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
