(()=>{"use strict";class e{static async getCategorias(){const e=await fetch("https://api.chucknorris.io/jokes/categories");return await e.json()}static async getFrase(e){const t=await fetch(`https://api.chucknorris.io/jokes/random?category=${e}`);return(await t.json()).value}}async function t(){const t=document.getElementById("categoria").value,a=document.getElementById("frase");a.innerHTML="";const n=await e.getFrase(t),o=document.createElement("div");o.textContent=n,a.appendChild(o)}window.generarNuevaFrase=t,window.agregarFavorita=function(){let e=document.getElementById("frase").textContent;if(""!==e){let t=localStorage.getItem("frasesFavoritas");t=t?JSON.parse(t):[],t.push(e),localStorage.setItem("frasesFavoritas",JSON.stringify(t))}else console.error("La frase es inválida.")},document.addEventListener("DOMContentLoaded",(()=>{const e=new URLSearchParams(window.location.search).get("categoria");document.getElementById("categoria").value=e,e&&t(),document.getElementById("verFavoritas").addEventListener("click",(()=>{window.location.href="favoritos.html"}))}))})();