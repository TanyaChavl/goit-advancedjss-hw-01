import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),l=t.querySelector("input[name='email']"),m=t.querySelector("textarea[name='message']"),o="feedback-form-state";function n(){localStorage.setItem(o,JSON.stringify(e))}function r(){const a=localStorage.getItem(o);if(a){const s=JSON.parse(a);e.email=s.email||"",e.message=s.message||"",l.value=e.email,m.value=e.message}}function i(a){e[a.target.name]=a.target.value.trim(),n()}r();t.addEventListener("input",i);t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form data:",e),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map