import{S as ln,i as gn,s as un,k as t,a as c,q as f,l as e,c as d,m as o,r as w,h as r,n as a,b as nn,D as n,B as tn}from"../../../chunks/index-cd96ad06.js";function hn(mn){let b,S,g,s,R,z,L,D,T,$,G,I,A,U,i,x,P,j,N,C,X,F,k,O,p,M,q,V,_,Z,E,W,Y,u,Q,J,B,K;return{c(){b=t("!DOCTYPE"),S=c(),g=t("html"),s=t("head"),R=t("meta"),z=c(),L=t("meta"),D=c(),T=t("title"),$=f("PC Parts Webshop"),G=c(),I=t("style"),A=f(`body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    h1 {
      margin: 0;
      font-size: 2em;
    }

    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 20px;
    }

    .category,
    .product {
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 20px;
      margin: 10px;
      text-align: center;
      border-radius: 10px;
      transition: transform 0.3s ease-in-out;
    }

    .category:hover,
    .product:hover {
      transform: scale(1.05);
    }

    .category h2,
    .product h2 {
      margin: 10px 0;
      font-size: 1.5em;
    }

    .category {
      cursor: pointer;
    }

    #cart {
      position: fixed;
      top: 0;
      right: 0;
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      display: none;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    #cart h2 {
      margin: 0;
      font-size: 1.8em;
    }

    #cart-items {
      list-style: none;
      padding: 0;
    }

    #cart-items li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
    }

    #cart-items img {
      max-width: 50px;
      height: auto;
      margin-right: 10px;
      border-radius: 5px;
    }

    .product img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      max-height: 100px;
    }

    #cart button,
    #return-btn {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
      align-items: center;
    }

    #cart button:hover,
    #return-btn:hover {
      background-color: #555;
    }

    .hidden {
      display: none;
    }`),U=c(),i=t("body"),x=t("header"),P=t("h1"),j=f("PC Parts Webshop"),N=c(),C=t("button"),X=f("Cart"),F=c(),k=t("main"),O=c(),p=t("div"),M=t("h2"),q=f("Shopping Cart"),V=c(),_=t("ul"),Z=c(),E=t("button"),W=f("Close Cart"),Y=c(),u=t("button"),Q=f("Return"),J=c(),B=t("script"),K=f(`const products = [
      { id: 1, name: "NZXT H510", price: 100, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1617970872-h510-white-black-mainw-system.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },
      { id: 2, name: "NZXT H510 ELITE", price: 180, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1615563443-h510-elite-white-black-kraken-x-system-purple-lighting-2.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },
      { id: 3, name: "i7", price: 300, category: "CPU", image: "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d2000010011131835/intel-core-i7-14700-21ghz-lga1700-socket-processor.jpg" },
      { id: 4, name: "Ryzen 7", price: 400, category: "CPU", image: "https://www.proshop.se/Images/915x900/3056707_fd1674cd648f.png" },
      { id: 5, name: "RTX 3080", price: 650, category: "GPU", image: "https://www.elgiganten.se/image/dv_web_D180001002521714/216111/gigabyte-geforce-rtx-3080-10gb-gaming-oc.jpg" },
      { id: 6, name: "GTX 1660", price: 250, category: "GPU", image: "https://m.media-amazon.com/images/I/61I8uVpjLpL._AC_UF1000,1000_QL80_.jpg" },
      { id: 7, name: "Gigabyte B650E Aorus Master", price: 150, category: "Motherboard", image: "https://cdn.mos.cms.futurecdn.net/vjVXxBANPQ6PMLgzCefi5c-1200-80.jpg.webp" },
      { id: 8, name: "G.Skill Trident Z DDR4 RGB 3200MHz 16GB", price: 50, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },
      { id: 9, name: "G.Skill Trident Z DDR4 RGB 3200MHz 32GB", price: 90, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },
      { id: 10, name: "Samsung 980 PRO M.2 NVMe SSD 1TB", price: 110, category: "SSD", image: "https://cdn.inet.se/product/688x386/4302202_4.png" },
      { id: 11, name: "Arctic P12 Max Svart", price: 20, category: "Fans", image: "https://cdn.inet.se/product/688x386/5324364_0.png" },
      { id: 12, name: "be quiet! Pure Rock 2 Svart", price: 50, category: "CPU Fans", image: "https://cdn.inet.se/product/688x386/5323105_6.png" },
      { id: 13, name: "Corsair RM850e ATX 3.0 850W", price: 80, category: "PSU", image: "https://cdn.inet.se/product/688x386/6905786_9.png" },
    ];

    let currentCategory = null;

    document.addEventListener("DOMContentLoaded", () => {
      const cartContainer = document.getElementById("cart-items");
      const productList = document.getElementById("product-list");

      window.addToCart = (productId) => {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
          const cartItem = document.createElement("li");
          cartItem.innerHTML = \`
            <div>
              <img src="\${selectedProduct.image}" alt="\${selectedProduct.name}">
              \${selectedProduct.name} - $\${selectedProduct.price} <button onclick="removeFromCart(this)">Remove</button>
            </div>\`;
          cartContainer.appendChild(cartItem);
        }
      };

      window.showCart = () => {
        document.getElementById("cart").classList.remove("hidden");
        document.getElementById("return-btn").classList.remove("hidden");
      };

      window.hideCart = () => {
        document.getElementById("cart").classList.add("hidden");
        document.getElementById("return-btn").classList.add("hidden");
        showCurrentState();
      };

      window.removeFromCart = (button) => {
        const cartItem = button.parentNode;
        cartItem.parentNode.removeChild(cartItem);
      };

      window.toggleCart = () => {
        const cart = document.getElementById("cart");
        if (cart.style.display === "none" || cart.style.display === "") {
          cart.style.display = "flex";
          document.getElementById("return-btn").classList.remove("hidden");
        } else {
          hideCart();
        }
      };

      window.showCategory = (category) => {
        currentCategory = category;
        productList.innerHTML = '';

        const categoryProducts = products.filter(product => product.category === category);

        categoryProducts.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("product");
          productElement.innerHTML = \`
            <img src="\${product.image}" alt="\${product.name}">
            <h2>\${product.name}</h2>
            <p>$\${product.price}</p>
            <button onclick="addToCart(\${product.id})">Add to Cart</button>
          \`;
          productList.appendChild(productElement);
        });

        document.getElementById("return-btn").classList.remove("hidden");
      };

      window.returnToCategories = () => {
        productList.innerHTML = '';
        document.getElementById("cart").classList.add("hidden");
        document.getElementById("return-btn").classList.add("hidden");
        showCategories();
      };

      window.showCategories = () => {
        productList.innerHTML = '';

        const uniqueCategories = [...new Set(products.map(product => product.category))];

        uniqueCategories.forEach(category => {
          const categoryElement = document.createElement("div");
          categoryElement.classList.add("category");
          categoryElement.onclick = () => showCategory(category);
          categoryElement.innerHTML = \`<h2>\${category}</h2>\`;
          productList.appendChild(categoryElement);
        });
      };

      window.showCurrentState = () => {
        if (currentCategory !== null) {
          showCategory(currentCategory);
        } else {
          showCategories();
        }
      };

      showCategories();
    });`),this.h()},l(m){b=e(m,"!DOCTYPE",{html:!0}),S=d(m),g=e(m,"HTML",{lang:!0});var h=o(g);s=e(h,"HEAD",{});var y=o(s);R=e(y,"META",{charset:!0}),z=d(y),L=e(y,"META",{name:!0,content:!0}),D=d(y),T=e(y,"TITLE",{});var en=o(T);$=w(en,"PC Parts Webshop"),en.forEach(r),G=d(y),I=e(y,"STYLE",{});var rn=o(I);A=w(rn,`body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    h1 {
      margin: 0;
      font-size: 2em;
    }

    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 20px;
    }

    .category,
    .product {
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 20px;
      margin: 10px;
      text-align: center;
      border-radius: 10px;
      transition: transform 0.3s ease-in-out;
    }

    .category:hover,
    .product:hover {
      transform: scale(1.05);
    }

    .category h2,
    .product h2 {
      margin: 10px 0;
      font-size: 1.5em;
    }

    .category {
      cursor: pointer;
    }

    #cart {
      position: fixed;
      top: 0;
      right: 0;
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      display: none;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    #cart h2 {
      margin: 0;
      font-size: 1.8em;
    }

    #cart-items {
      list-style: none;
      padding: 0;
    }

    #cart-items li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
    }

    #cart-items img {
      max-width: 50px;
      height: auto;
      margin-right: 10px;
      border-radius: 5px;
    }

    .product img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      max-height: 100px;
    }

    #cart button,
    #return-btn {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
      align-items: center;
    }

    #cart button:hover,
    #return-btn:hover {
      background-color: #555;
    }

    .hidden {
      display: none;
    }`),rn.forEach(r),y.forEach(r),U=d(h),i=e(h,"BODY",{});var l=o(i);x=e(l,"HEADER",{});var H=o(x);P=e(H,"H1",{});var on=o(P);j=w(on,"PC Parts Webshop"),on.forEach(r),N=d(H),C=e(H,"BUTTON",{onclick:!0});var an=o(C);X=w(an,"Cart"),an.forEach(r),H.forEach(r),F=d(l),k=e(l,"MAIN",{id:!0}),o(k).forEach(r),O=d(l),p=e(l,"DIV",{id:!0,class:!0});var v=o(p);M=e(v,"H2",{});var cn=o(M);q=w(cn,"Shopping Cart"),cn.forEach(r),V=d(v),_=e(v,"UL",{id:!0}),o(_).forEach(r),Z=d(v),E=e(v,"BUTTON",{onclick:!0});var dn=o(E);W=w(dn,"Close Cart"),dn.forEach(r),v.forEach(r),Y=d(l),u=e(l,"BUTTON",{onclick:!0,class:!0,id:!0});var sn=o(u);Q=w(sn,"Return"),sn.forEach(r),J=d(l),B=e(l,"SCRIPT",{});var pn=o(B);K=w(pn,`const products = [
      { id: 1, name: "NZXT H510", price: 100, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1617970872-h510-white-black-mainw-system.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },
      { id: 2, name: "NZXT H510 ELITE", price: 180, category: "Chassi", image: "https://nzxt.com/assets/cms/34299/1615563443-h510-elite-white-black-kraken-x-system-purple-lighting-2.png?ar64=MTox&auto=format&dpr=1.5&fit=crop&h=400&w=400" },
      { id: 3, name: "i7", price: 300, category: "CPU", image: "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d2000010011131835/intel-core-i7-14700-21ghz-lga1700-socket-processor.jpg" },
      { id: 4, name: "Ryzen 7", price: 400, category: "CPU", image: "https://www.proshop.se/Images/915x900/3056707_fd1674cd648f.png" },
      { id: 5, name: "RTX 3080", price: 650, category: "GPU", image: "https://www.elgiganten.se/image/dv_web_D180001002521714/216111/gigabyte-geforce-rtx-3080-10gb-gaming-oc.jpg" },
      { id: 6, name: "GTX 1660", price: 250, category: "GPU", image: "https://m.media-amazon.com/images/I/61I8uVpjLpL._AC_UF1000,1000_QL80_.jpg" },
      { id: 7, name: "Gigabyte B650E Aorus Master", price: 150, category: "Motherboard", image: "https://cdn.mos.cms.futurecdn.net/vjVXxBANPQ6PMLgzCefi5c-1200-80.jpg.webp" },
      { id: 8, name: "G.Skill Trident Z DDR4 RGB 3200MHz 16GB", price: 50, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },
      { id: 9, name: "G.Skill Trident Z DDR4 RGB 3200MHz 32GB", price: 90, category: "RAM", image: "https://www.komplett.se/img/p/640/916429.jpg" },
      { id: 10, name: "Samsung 980 PRO M.2 NVMe SSD 1TB", price: 110, category: "SSD", image: "https://cdn.inet.se/product/688x386/4302202_4.png" },
      { id: 11, name: "Arctic P12 Max Svart", price: 20, category: "Fans", image: "https://cdn.inet.se/product/688x386/5324364_0.png" },
      { id: 12, name: "be quiet! Pure Rock 2 Svart", price: 50, category: "CPU Fans", image: "https://cdn.inet.se/product/688x386/5323105_6.png" },
      { id: 13, name: "Corsair RM850e ATX 3.0 850W", price: 80, category: "PSU", image: "https://cdn.inet.se/product/688x386/6905786_9.png" },
    ];

    let currentCategory = null;

    document.addEventListener("DOMContentLoaded", () => {
      const cartContainer = document.getElementById("cart-items");
      const productList = document.getElementById("product-list");

      window.addToCart = (productId) => {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
          const cartItem = document.createElement("li");
          cartItem.innerHTML = \`
            <div>
              <img src="\${selectedProduct.image}" alt="\${selectedProduct.name}">
              \${selectedProduct.name} - $\${selectedProduct.price} <button onclick="removeFromCart(this)">Remove</button>
            </div>\`;
          cartContainer.appendChild(cartItem);
        }
      };

      window.showCart = () => {
        document.getElementById("cart").classList.remove("hidden");
        document.getElementById("return-btn").classList.remove("hidden");
      };

      window.hideCart = () => {
        document.getElementById("cart").classList.add("hidden");
        document.getElementById("return-btn").classList.add("hidden");
        showCurrentState();
      };

      window.removeFromCart = (button) => {
        const cartItem = button.parentNode;
        cartItem.parentNode.removeChild(cartItem);
      };

      window.toggleCart = () => {
        const cart = document.getElementById("cart");
        if (cart.style.display === "none" || cart.style.display === "") {
          cart.style.display = "flex";
          document.getElementById("return-btn").classList.remove("hidden");
        } else {
          hideCart();
        }
      };

      window.showCategory = (category) => {
        currentCategory = category;
        productList.innerHTML = '';

        const categoryProducts = products.filter(product => product.category === category);

        categoryProducts.forEach(product => {
          const productElement = document.createElement("div");
          productElement.classList.add("product");
          productElement.innerHTML = \`
            <img src="\${product.image}" alt="\${product.name}">
            <h2>\${product.name}</h2>
            <p>$\${product.price}</p>
            <button onclick="addToCart(\${product.id})">Add to Cart</button>
          \`;
          productList.appendChild(productElement);
        });

        document.getElementById("return-btn").classList.remove("hidden");
      };

      window.returnToCategories = () => {
        productList.innerHTML = '';
        document.getElementById("cart").classList.add("hidden");
        document.getElementById("return-btn").classList.add("hidden");
        showCategories();
      };

      window.showCategories = () => {
        productList.innerHTML = '';

        const uniqueCategories = [...new Set(products.map(product => product.category))];

        uniqueCategories.forEach(category => {
          const categoryElement = document.createElement("div");
          categoryElement.classList.add("category");
          categoryElement.onclick = () => showCategory(category);
          categoryElement.innerHTML = \`<h2>\${category}</h2>\`;
          productList.appendChild(categoryElement);
        });
      };

      window.showCurrentState = () => {
        if (currentCategory !== null) {
          showCategory(currentCategory);
        } else {
          showCategories();
        }
      };

      showCategories();
    });`),pn.forEach(r),l.forEach(r),h.forEach(r),this.h()},h(){a(b,"html",""),a(R,"charset","UTF-8"),a(L,"name","viewport"),a(L,"content","width=device-width, initial-scale=1.0"),a(C,"onclick","toggleCart()"),a(k,"id","product-list"),a(_,"id","cart-items"),a(E,"onclick","hideCart()"),a(p,"id","cart"),a(p,"class","hidden"),a(u,"onclick","returnToCategories()"),a(u,"class","hidden"),a(u,"id","return-btn"),a(g,"lang","en")},m(m,h){nn(m,b,h),nn(m,S,h),nn(m,g,h),n(g,s),n(s,R),n(s,z),n(s,L),n(s,D),n(s,T),n(T,$),n(s,G),n(s,I),n(I,A),n(g,U),n(g,i),n(i,x),n(x,P),n(P,j),n(x,N),n(x,C),n(C,X),n(i,F),n(i,k),n(i,O),n(i,p),n(p,M),n(M,q),n(p,V),n(p,_),n(p,Z),n(p,E),n(E,W),n(i,Y),n(i,u),n(u,Q),n(i,J),n(i,B),n(B,K)},p:tn,i:tn,o:tn,d(m){m&&r(b),m&&r(S),m&&r(g)}}}class fn extends ln{constructor(b){super(),gn(this,b,null,hn,un,{})}}export{fn as default};
