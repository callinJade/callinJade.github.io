//information from: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

const headerTemplate = document.createElement('template');


headerTemplate.innerHTML = `
  <style>
    .navbar {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #020247;
    }

    ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #11BB7F;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
	}

	.dropdown {
		position: relative;
	}

	.dropdown-content {
		display: none; 
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #020247;
		min-width: 100px;
		box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
		z-index: 10;
		padding: 0;
	}
	  
	.dropdown:hover .dropdown-content {
		display: block;
	}
	  
	.dropdown-content li {
		display: block;
	}
	  
	.dropdown-content a {
		display: block;
		padding: 10px 15px;
		margin: 0;
		font-size: 14px;
	}
	  
	.dropdown-content a:hover {
		background-color: #11BB7F;
		color: #020247;
	}


@media screen and (max-width: 600px) {
    .navbar {
        height: auto;
        padding: 10px 0;
    }

    ul {
        flex-direction: column;
        align-items: center;
    }

    ul li {
        margin: 10px 0;
    }

    .dropdown-content {
        position: static;
        display: none; 
        width: 100%;
        text-align: center;
        box-shadow: none;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
}
  </style>
  <header>

		<nav class="navbar">
			<ul>
				<li><a href="./index.html">Home</a></li>
				<li class="dropdown">
					<a href="#">Projects</a> 
					<ul class="dropdown-content">
						<li><a href="./projects/cs_projects.html">CS Projects</a></li>
						<li><a href="./projects/bio_projects.html">Bio Projects</a></li>
					</ul>
				</li>
				<li><a href="./hobbies/hobby.html">Hobbies</a></li>
				<li><a href="./contact.html">Contact</a></li>
			</ul>
	
		</nav>
	</header>
`;


class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
	const shadowRoot = this.attachShadow({ mode: 'closed' });
	shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
