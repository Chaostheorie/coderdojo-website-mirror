module.exports = {
    ci: {
        collect: {
            staticDistDir: './public',
            // Fully static page = no need to rerun
            numberOfRuns: 1,
            settings: {
                chromeFlags: '--no-sandbox',
                // Done by NGINX
                skipAudits: ['redirects-http'],
                // Use applied throttling instead of simulated throttling
                throttlingMethod: 'devtools',
            },
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'categories:seo': ['warn', { minScore: 0.9 }],
                'categories:accessability': ['error', { minScore: 0.9 }],
                'categories:performance': ['error', { minScore: 0.9 }],
                'uses-long-cache-ttl': false,
                'csp-xss': false,
            },
        },
    },
};
