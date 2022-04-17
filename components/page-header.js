customElements.define('page-header',
    class extends HTMLElement {
        constructor() {
            super();

            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = `
                    <h1>
                        carlo.sh
                    </h1>
                    <nav>
                        <a href="./">home</a> |
                        <a href="./blog.html">blog</a> |
                        <a href="./charity.html">charity</a> |
                        <a href="./tools.html">tools</a> |
                    </nav>
        `;
        }
    }
);
