import{S as mr,i as lr,s as gr,k as n,a as c,q as f,l as t,c as d,m as o,r as w,h as e,n as a,b as rr,D as r,B as nr}from"../../../chunks/index-cd96ad06.js";function ur(pr){let b,S,g,s,R,z,L,D,T,$,G,I,A,U,i,x,P,j,N,C,X,F,k,O,p,M,q,V,_,Z,E,W,Y,u,Q,J,B,K;return{c(){b=n("!DOCTYPE"),S=c(),g=n("html"),s=n("head"),R=n("meta"),z=c(),L=n("meta"),D=c(),T=n("title"),$=f("PC Parts Webshop"),G=c(),I=n("style"),A=f(`body {\r
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r
      margin: 0;\r
      padding: 0;\r
      background-color: #f4f4f4;\r
    }\r
\r
    header {\r
      background-color: #333;\r
      color: white;\r
      padding: 20px;\r
      text-align: center;\r
    }\r
\r
    h1 {\r
      margin: 0;\r
      font-size: 2em;\r
    }\r
\r
    main {\r
      display: flex;\r
      flex-wrap: wrap;\r
      justify-content: space-around;\r
      padding: 20px;\r
    }\r
\r
    .category,\r
    .product {\r
      background-color: #fff;\r
      border: 1px solid #ddd;\r
      padding: 20px;\r
      margin: 10px;\r
      text-align: center;\r
      border-radius: 10px;\r
      transition: transform 0.3s ease-in-out;\r
    }\r
\r
    .category:hover,\r
    .product:hover {\r
      transform: scale(1.05);\r
    }\r
\r
    .category h2,\r
    .product h2 {\r
      margin: 10px 0;\r
      font-size: 1.5em;\r
    }\r
\r
    .category {\r
      cursor: pointer;\r
    }\r
\r
    #cart {\r
      position: fixed;\r
      top: 0;\r
      right: 0;\r
      background-color: #fff;\r
      border: 1px solid #ddd;\r
      padding: 20px;\r
      display: flex;\r
      flex-direction: column;\r
      align-items: flex-end;\r
      display: none;\r
      border-radius: 10px;\r
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r
    }\r
\r
    #cart h2 {\r
      margin: 0;\r
      font-size: 1.8em;\r
    }\r
\r
    #cart-items {\r
      list-style: none;\r
      padding: 0;\r
    }\r
\r
    #cart-items li {\r
      display: flex;\r
      justify-content: space-between;\r
      align-items: center;\r
      margin: 10px 0;\r
    }\r
\r
    #cart-items img {\r
      max-width: 50px;\r
      height: auto;\r
      margin-right: 10px;\r
      border-radius: 5px;\r
    }\r
\r
    .product img {\r
      max-width: 100%;\r
      height: auto;\r
      border-radius: 5px;\r
      max-height: 100px;\r
    }\r
\r
    #cart button,\r
    #return-btn {\r
      margin-top: 10px;\r
      padding: 10px 20px;\r
      font-size: 1em;\r
      cursor: pointer;\r
      background-color: #333;\r
      color: white;\r
      border: none;\r
      border-radius: 5px;\r
      transition: background-color 0.3s ease-in-out;\r
      align-items: center;\r
    }\r
\r
    #cart button:hover,\r
    #return-btn:hover {\r
      background-color: #555;\r
    }\r
\r
    .hidden {\r
      display: none;\r
    }`),U=c(),i=n("body"),x=n("header"),P=n("h1"),j=f("PC Parts Webshop"),N=c(),C=n("button"),X=f("Cart"),F=c(),k=n("main"),O=c(),p=n("div"),M=n("h2"),q=f("Shopping Cart"),V=c(),_=n("ul"),Z=c(),E=n("button"),W=f("Close Cart"),Y=c(),u=n("button"),Q=f("Return"),J=c(),B=n("script"),K=f(`const products = [\r
      { id: 1, name: "NZXT H510", price: 100, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1617970872-h510-white-black-mainw-system.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },\r
      { id: 2, name: "NZXT H510 ELITE", price: 180, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1615563443-h510-elite-white-black-kraken-x-system-purple-lighting-2.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },\r
      { id: 3, name: "i7", price: 300, category: "CPU", image: "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d2000010011131835/intel-core-i7-14700-21ghz-lga1700-socket-processor.jpg" },\r
      { id: 4, name: "Ryzen 7", price: 400, category: "CPU", image: "https://www.proshop.se/Images/915x900/3056707_fd1674cd648f.png" },\r
      { id: 5, name: "RTX 3080", price: 650, category: "GPU", image: "https://www.elgiganten.se/image/dv_web_D180001002521714/216111/gigabyte-geforce-rtx-3080-10gb-gaming-oc.jpg" },\r
      { id: 6, name: "GTX 1660", price: 250, category: "GPU", image: "https://m.media-amazon.com/images/I/61I8uVpjLpL._AC_UF1000,1000_QL80_.jpg" },\r
      { id: 7, name: "Gigabyte B650E Aorus Master", price: 150, category: "Motherboard", image: "https://cdn.mos.cms.futurecdn.net/vjVXxBANPQ6PMLgzCefi5c-1200-80.jpg.webp" },\r
      { id: 8, name: "G.Skill Trident Z DDR4 RGB 3200MHz 16GB", price: 50, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },\r
      { id: 9, name: "G.Skill Trident Z DDR4 RGB 3200MHz 32GB", price: 90, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },\r
      { id: 10, name: "Samsung 980 PRO M.2 NVMe SSD 1TB", price: 110, category: "SSD", image: "https://cdn.inet.se/product/688x386/4302202_4.png" },\r
      { id: 11, name: "Arctic P12 Max Svart", price: 20, category: "Fans", image: "https://cdn.inet.se/product/688x386/5324364_0.png" },\r
      { id: 12, name: "be quiet! Pure Rock 2 Svart", price: 50, category: "CPU Fans", image: "https://cdn.inet.se/product/688x386/5323105_6.png" },\r
      { id: 13, name: "Corsair RM850e ATX 3.0 850W", price: 80, category: "PSU", image: "https://cdn.inet.se/product/688x386/6905786_9.png" },\r
    ];\r
\r
    let currentCategory = null;\r
\r
    document.addEventListener("DOMContentLoaded", () => {\r
      const cartContainer = document.getElementById("cart-items");\r
      const productList = document.getElementById("product-list");\r
\r
      window.addToCart = (productId) => {\r
        const selectedProduct = products.find(product => product.id === productId);\r
        if (selectedProduct) {\r
          const cartItem = document.createElement("li");\r
          cartItem.innerHTML = \`\r
            <div>\r
              <img src="\${selectedProduct.image}" alt="\${selectedProduct.name}">\r
              \${selectedProduct.name} - $\${selectedProduct.price} <button onclick="removeFromCart(this)">Remove</button>\r
            </div>\`;\r
          cartContainer.appendChild(cartItem);\r
        }\r
      };\r
\r
      window.showCart = () => {\r
        document.getElementById("cart").classList.remove("hidden");\r
        document.getElementById("return-btn").classList.remove("hidden");\r
      };\r
\r
      window.hideCart = () => {\r
        document.getElementById("cart").classList.add("hidden");\r
        document.getElementById("return-btn").classList.add("hidden");\r
        showCurrentState();\r
      };\r
\r
      window.removeFromCart = (button) => {\r
        const cartItem = button.parentNode;\r
        cartItem.parentNode.removeChild(cartItem);\r
      };\r
\r
      window.toggleCart = () => {\r
        const cart = document.getElementById("cart");\r
        if (cart.style.display === "none" || cart.style.display === "") {\r
          cart.style.display = "flex";\r
          document.getElementById("return-btn").classList.remove("hidden");\r
        } else {\r
          hideCart();\r
        }\r
      };\r
\r
      window.showCategory = (category) => {\r
        currentCategory = category;\r
        productList.innerHTML = '';\r
\r
        const categoryProducts = products.filter(product => product.category === category);\r
\r
        categoryProducts.forEach(product => {\r
          const productElement = document.createElement("div");\r
          productElement.classList.add("product");\r
          productElement.innerHTML = \`\r
            <img src="\${product.image}" alt="\${product.name}">\r
            <h2>\${product.name}</h2>\r
            <p>$\${product.price}</p>\r
            <button onclick="addToCart(\${product.id})">Add to Cart</button>\r
          \`;\r
          productList.appendChild(productElement);\r
        });\r
\r
        document.getElementById("return-btn").classList.remove("hidden");\r
      };\r
\r
      window.returnToCategories = () => {\r
        productList.innerHTML = '';\r
        document.getElementById("cart").classList.add("hidden");\r
        document.getElementById("return-btn").classList.add("hidden");\r
        showCategories();\r
      };\r
\r
      window.showCategories = () => {\r
        productList.innerHTML = '';\r
\r
        const uniqueCategories = [...new Set(products.map(product => product.category))];\r
\r
        uniqueCategories.forEach(category => {\r
          const categoryElement = document.createElement("div");\r
          categoryElement.classList.add("category");\r
          categoryElement.onclick = () => showCategory(category);\r
          categoryElement.innerHTML = \`<h2>\${category}</h2>\`;\r
          productList.appendChild(categoryElement);\r
        });\r
      };\r
\r
      window.showCurrentState = () => {\r
        if (currentCategory !== null) {\r
          showCategory(currentCategory);\r
        } else {\r
          showCategories();\r
        }\r
      };\r
\r
      showCategories();\r
    });`),this.h()},l(m){b=t(m,"!DOCTYPE",{html:!0}),S=d(m),g=t(m,"HTML",{lang:!0});var h=o(g);s=t(h,"HEAD",{});var y=o(s);R=t(y,"META",{charset:!0}),z=d(y),L=t(y,"META",{name:!0,content:!0}),D=d(y),T=t(y,"TITLE",{});var tr=o(T);$=w(tr,"PC Parts Webshop"),tr.forEach(e),G=d(y),I=t(y,"STYLE",{});var er=o(I);A=w(er,`body {\r
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r
      margin: 0;\r
      padding: 0;\r
      background-color: #f4f4f4;\r
    }\r
\r
    header {\r
      background-color: #333;\r
      color: white;\r
      padding: 20px;\r
      text-align: center;\r
    }\r
\r
    h1 {\r
      margin: 0;\r
      font-size: 2em;\r
    }\r
\r
    main {\r
      display: flex;\r
      flex-wrap: wrap;\r
      justify-content: space-around;\r
      padding: 20px;\r
    }\r
\r
    .category,\r
    .product {\r
      background-color: #fff;\r
      border: 1px solid #ddd;\r
      padding: 20px;\r
      margin: 10px;\r
      text-align: center;\r
      border-radius: 10px;\r
      transition: transform 0.3s ease-in-out;\r
    }\r
\r
    .category:hover,\r
    .product:hover {\r
      transform: scale(1.05);\r
    }\r
\r
    .category h2,\r
    .product h2 {\r
      margin: 10px 0;\r
      font-size: 1.5em;\r
    }\r
\r
    .category {\r
      cursor: pointer;\r
    }\r
\r
    #cart {\r
      position: fixed;\r
      top: 0;\r
      right: 0;\r
      background-color: #fff;\r
      border: 1px solid #ddd;\r
      padding: 20px;\r
      display: flex;\r
      flex-direction: column;\r
      align-items: flex-end;\r
      display: none;\r
      border-radius: 10px;\r
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r
    }\r
\r
    #cart h2 {\r
      margin: 0;\r
      font-size: 1.8em;\r
    }\r
\r
    #cart-items {\r
      list-style: none;\r
      padding: 0;\r
    }\r
\r
    #cart-items li {\r
      display: flex;\r
      justify-content: space-between;\r
      align-items: center;\r
      margin: 10px 0;\r
    }\r
\r
    #cart-items img {\r
      max-width: 50px;\r
      height: auto;\r
      margin-right: 10px;\r
      border-radius: 5px;\r
    }\r
\r
    .product img {\r
      max-width: 100%;\r
      height: auto;\r
      border-radius: 5px;\r
      max-height: 100px;\r
    }\r
\r
    #cart button,\r
    #return-btn {\r
      margin-top: 10px;\r
      padding: 10px 20px;\r
      font-size: 1em;\r
      cursor: pointer;\r
      background-color: #333;\r
      color: white;\r
      border: none;\r
      border-radius: 5px;\r
      transition: background-color 0.3s ease-in-out;\r
      align-items: center;\r
    }\r
\r
    #cart button:hover,\r
    #return-btn:hover {\r
      background-color: #555;\r
    }\r
\r
    .hidden {\r
      display: none;\r
    }`),er.forEach(e),y.forEach(e),U=d(h),i=t(h,"BODY",{});var l=o(i);x=t(l,"HEADER",{});var H=o(x);P=t(H,"H1",{});var or=o(P);j=w(or,"PC Parts Webshop"),or.forEach(e),N=d(H),C=t(H,"BUTTON",{onclick:!0});var ar=o(C);X=w(ar,"Cart"),ar.forEach(e),H.forEach(e),F=d(l),k=t(l,"MAIN",{id:!0}),o(k).forEach(e),O=d(l),p=t(l,"DIV",{id:!0,class:!0});var v=o(p);M=t(v,"H2",{});var ir=o(M);q=w(ir,"Shopping Cart"),ir.forEach(e),V=d(v),_=t(v,"UL",{id:!0}),o(_).forEach(e),Z=d(v),E=t(v,"BUTTON",{onclick:!0});var cr=o(E);W=w(cr,"Close Cart"),cr.forEach(e),v.forEach(e),Y=d(l),u=t(l,"BUTTON",{onclick:!0,class:!0,id:!0});var dr=o(u);Q=w(dr,"Return"),dr.forEach(e),J=d(l),B=t(l,"SCRIPT",{});var sr=o(B);K=w(sr,`const products = [\r
      { id: 1, name: "NZXT H510", price: 100, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1617970872-h510-white-black-mainw-system.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },\r
      { id: 2, name: "NZXT H510 ELITE", price: 180, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1615563443-h510-elite-white-black-kraken-x-system-purple-lighting-2.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },\r
      { id: 3, name: "i7", price: 300, category: "CPU", image: "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d2000010011131835/intel-core-i7-14700-21ghz-lga1700-socket-processor.jpg" },\r
      { id: 4, name: "Ryzen 7", price: 400, category: "CPU", image: "https://www.proshop.se/Images/915x900/3056707_fd1674cd648f.png" },\r
      { id: 5, name: "RTX 3080", price: 650, category: "GPU", image: "https://www.elgiganten.se/image/dv_web_D180001002521714/216111/gigabyte-geforce-rtx-3080-10gb-gaming-oc.jpg" },\r
      { id: 6, name: "GTX 1660", price: 250, category: "GPU", image: "https://m.media-amazon.com/images/I/61I8uVpjLpL._AC_UF1000,1000_QL80_.jpg" },\r
      { id: 7, name: "Gigabyte B650E Aorus Master", price: 150, category: "Motherboard", image: "https://cdn.mos.cms.futurecdn.net/vjVXxBANPQ6PMLgzCefi5c-1200-80.jpg.webp" },\r
      { id: 8, name: "G.Skill Trident Z DDR4 RGB 3200MHz 16GB", price: 50, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },\r
      { id: 9, name: "G.Skill Trident Z DDR4 RGB 3200MHz 32GB", price: 90, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },\r
      { id: 10, name: "Samsung 980 PRO M.2 NVMe SSD 1TB", price: 110, category: "SSD", image: "https://cdn.inet.se/product/688x386/4302202_4.png" },\r
      { id: 11, name: "Arctic P12 Max Svart", price: 20, category: "Fans", image: "https://cdn.inet.se/product/688x386/5324364_0.png" },\r
      { id: 12, name: "be quiet! Pure Rock 2 Svart", price: 50, category: "CPU Fans", image: "https://cdn.inet.se/product/688x386/5323105_6.png" },\r
      { id: 13, name: "Corsair RM850e ATX 3.0 850W", price: 80, category: "PSU", image: "https://cdn.inet.se/product/688x386/6905786_9.png" },\r
    ];\r
\r
    let currentCategory = null;\r
\r
    document.addEventListener("DOMContentLoaded", () => {\r
      const cartContainer = document.getElementById("cart-items");\r
      const productList = document.getElementById("product-list");\r
\r
      window.addToCart = (productId) => {\r
        const selectedProduct = products.find(product => product.id === productId);\r
        if (selectedProduct) {\r
          const cartItem = document.createElement("li");\r
          cartItem.innerHTML = \`\r
            <div>\r
              <img src="\${selectedProduct.image}" alt="\${selectedProduct.name}">\r
              \${selectedProduct.name} - $\${selectedProduct.price} <button onclick="removeFromCart(this)">Remove</button>\r
            </div>\`;\r
          cartContainer.appendChild(cartItem);\r
        }\r
      };\r
\r
      window.showCart = () => {\r
        document.getElementById("cart").classList.remove("hidden");\r
        document.getElementById("return-btn").classList.remove("hidden");\r
      };\r
\r
      window.hideCart = () => {\r
        document.getElementById("cart").classList.add("hidden");\r
        document.getElementById("return-btn").classList.add("hidden");\r
        showCurrentState();\r
      };\r
\r
      window.removeFromCart = (button) => {\r
        const cartItem = button.parentNode;\r
        cartItem.parentNode.removeChild(cartItem);\r
      };\r
\r
      window.toggleCart = () => {\r
        const cart = document.getElementById("cart");\r
        if (cart.style.display === "none" || cart.style.display === "") {\r
          cart.style.display = "flex";\r
          document.getElementById("return-btn").classList.remove("hidden");\r
        } else {\r
          hideCart();\r
        }\r
      };\r
\r
      window.showCategory = (category) => {\r
        currentCategory = category;\r
        productList.innerHTML = '';\r
\r
        const categoryProducts = products.filter(product => product.category === category);\r
\r
        categoryProducts.forEach(product => {\r
          const productElement = document.createElement("div");\r
          productElement.classList.add("product");\r
          productElement.innerHTML = \`\r
            <img src="\${product.image}" alt="\${product.name}">\r
            <h2>\${product.name}</h2>\r
            <p>$\${product.price}</p>\r
            <button onclick="addToCart(\${product.id})">Add to Cart</button>\r
          \`;\r
          productList.appendChild(productElement);\r
        });\r
\r
        document.getElementById("return-btn").classList.remove("hidden");\r
      };\r
\r
      window.returnToCategories = () => {\r
        productList.innerHTML = '';\r
        document.getElementById("cart").classList.add("hidden");\r
        document.getElementById("return-btn").classList.add("hidden");\r
        showCategories();\r
      };\r
\r
      window.showCategories = () => {\r
        productList.innerHTML = '';\r
\r
        const uniqueCategories = [...new Set(products.map(product => product.category))];\r
\r
        uniqueCategories.forEach(category => {\r
          const categoryElement = document.createElement("div");\r
          categoryElement.classList.add("category");\r
          categoryElement.onclick = () => showCategory(category);\r
          categoryElement.innerHTML = \`<h2>\${category}</h2>\`;\r
          productList.appendChild(categoryElement);\r
        });\r
      };\r
\r
      window.showCurrentState = () => {\r
        if (currentCategory !== null) {\r
          showCategory(currentCategory);\r
        } else {\r
          showCategories();\r
        }\r
      };\r
\r
      showCategories();\r
    });`),sr.forEach(e),l.forEach(e),h.forEach(e),this.h()},h(){a(b,"html",""),a(R,"charset","UTF-8"),a(L,"name","viewport"),a(L,"content","width=device-width, initial-scale=1.0"),a(C,"onclick","toggleCart()"),a(k,"id","product-list"),a(_,"id","cart-items"),a(E,"onclick","hideCart()"),a(p,"id","cart"),a(p,"class","hidden"),a(u,"onclick","returnToCategories()"),a(u,"class","hidden"),a(u,"id","return-btn"),a(g,"lang","en")},m(m,h){rr(m,b,h),rr(m,S,h),rr(m,g,h),r(g,s),r(s,R),r(s,z),r(s,L),r(s,D),r(s,T),r(T,$),r(s,G),r(s,I),r(I,A),r(g,U),r(g,i),r(i,x),r(x,P),r(P,j),r(x,N),r(x,C),r(C,X),r(i,F),r(i,k),r(i,O),r(i,p),r(p,M),r(M,q),r(p,V),r(p,_),r(p,Z),r(p,E),r(E,W),r(i,Y),r(i,u),r(u,Q),r(i,J),r(i,B),r(B,K)},p:nr,i:nr,o:nr,d(m){m&&e(b),m&&e(S),m&&e(g)}}}class yr extends mr{constructor(b){super(),lr(this,b,null,ur,gr,{})}}export{yr as default};
