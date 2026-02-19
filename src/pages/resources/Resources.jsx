import { Link } from 'react-router-dom'

function Resources() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Stay informed with the latest insights on governance, risk, compliance, and enterprise automation from Glimmora International experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blogs Card */}
            <Link
              to="/resources/blogs"
              className="card p-8 group hover:border-brand-maroon border-2 border-transparent transition-all"
            >
              <div className="w-16 h-16 bg-brand-maroon/10 rounded-xl flex items-center justify-center text-brand-maroon mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-maroon transition-colors">
                Blogs
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert perspectives on GRC, risk management, compliance automation, and enterprise digital transformation.
              </p>
              <div className="flex items-center text-brand-maroon font-semibold group-hover:gap-2 transition-all">
                <span>Explore Articles</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Insights Card (Coming Soon) */}
            <div className="card p-8 opacity-75">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industry Insights
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-driven analysis of industry trends, regulatory changes, and market dynamics.
              </p>
              <div className="inline-flex items-center text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
                Coming Soon
              </div>
            </div>

            {/* Whitepapers Card (Coming Soon) */}
            <div className="card p-8 opacity-75">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Whitepapers
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In-depth research and technical documentation on enterprise GRC and automation platforms.
              </p>
              <div className="inline-flex items-center text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
                Coming Soon
              </div>
            </div>

            {/* Case Studies Card (Coming Soon) */}
            <div className="card p-8 opacity-75">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Case Studies
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Real-world success stories and measurable outcomes from enterprise platform implementations.
              </p>
              <div className="inline-flex items-center text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
                Coming Soon
              </div>
            </div>

            {/* Webinars Card (Coming Soon) */}
            <div className="card p-8 opacity-75">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Webinars & Events
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Live and on-demand webinars featuring platform demos, expert panels, and customer discussions.
              </p>
              <div className="inline-flex items-center text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
                Coming Soon
              </div>
            </div>

            {/* Resources Library Card (Coming Soon) */}
            <div className="card p-8 opacity-75">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Resource Library
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Downloadable guides, templates, and best practices for GRC and automation implementation.
              </p>
              <div className="inline-flex items-center text-gray-500 text-sm font-semibold bg-gray-100 px-4 py-2 rounded-full">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to receive the latest insights, platform updates, and industry news directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field flex-1"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
