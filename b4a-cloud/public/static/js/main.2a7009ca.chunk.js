(this.webpackJsonpcoadventure=this.webpackJsonpcoadventure||[]).push([[0],{166:function(e,t,c){},240:function(e,t,c){},249:function(e,t,c){},250:function(e,t,c){},511:function(e,t){},565:function(e,t,c){},567:function(e,t,c){},568:function(e,t,c){},569:function(e,t,c){},570:function(e,t,c){},571:function(e,t,c){},572:function(e,t,c){},573:function(e,t,c){},574:function(e,t,c){},575:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(241),r=c.n(s),i=(c(249),c(250),c(76)),l=c(6),o=c(12),j=c.n(o),d=c(242),b=c(243),u=(c(565),c(1));function x(){var e=[{menuItem:Object(u.jsx)(d.a,{}),link:"/Profile",linkId:1},{menuItem:"Excursions",link:"/Excursions",linkId:2},{menuItem:"Book Seats",link:"/BookSeats",linkId:3},{menuItem:"Feedback",link:"/Feedback",linkId:4},{menuItem:Object(u.jsx)(b.a,{}),link:"/Profile",linkId:5}];return Object(u.jsxs)("header",{children:[!j.a.User.current()&&Object(u.jsxs)("div",{className:"menu-container",children:[Object(u.jsx)("div",{className:"menu-link",children:Object(u.jsx)(i.b,{to:"/register",children:"Register"},"7")}),Object(u.jsx)("div",{className:"menu-link",children:Object(u.jsx)(i.b,{to:"/login",children:"Login"},"6")})]}),j.a.User.current()&&Object(u.jsx)("div",{className:"menu-container",children:e.map((function(e){return Object(u.jsx)("div",{className:"menu-link",children:Object(u.jsx)(i.b,{to:e.link,children:e.menuItem},e.linkId)})}))})]})}c(567);var m=c.p+"static/media/Logo_CoAdventure.ee2e0926.png";var O=function(){return Object(u.jsx)("footer",{className:"footer-container",children:Object(u.jsx)("img",{src:m,className:"logo",alt:"Logo"})})},h=c(9);c(240);var p=function(e){var t=e.title,c=e.type,n=e.value,a=e.onChange;return Object(u.jsxs)("div",{className:"input-row",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("label",{children:Object(u.jsx)("input",{className:"input-field",type:c,value:n,onChange:a})})]})};var f=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(h.a)(s,2),i=r[0],o=r[1],d=Object(l.f)();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsxs)("form",{className:"input-form",children:[Object(u.jsx)(p,{title:"E-mail",type:"email",value:c,onChange:function(e){a(e.target.value)}}),Object(u.jsx)(p,{title:"Password",type:"password",value:i,onChange:function(e){o(e.target.value)}}),Object(u.jsx)("div",{className:"submit-button",children:Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("login clicked");var t=new j.a.User;t.setPassword(i),t.setUsername(c),t.logIn().then((function(){d("/profile")}))},type:"submit",className:"green-button",children:Object(u.jsx)("p",{children:"Login"})})})]})]})};var v=function(){var e=Object(l.f)();return j.a.User.current()&&e("/profile"),Object(u.jsx)(f,{})},g=c(86),N=c(60);c(59),c(166);var k=function(e){var t=e.onClick;return Object(u.jsx)("button",{className:"back-button",onClick:t,children:Object(u.jsx)("p",{children:"Back"})})};var y=function(e){var t=e.text,c=e.onClick;return Object(u.jsx)("button",{className:"green-button",onClick:c,text:t,children:Object(u.jsx)("p",{children:t})})};c(568),c(569);var S=function(e){return Object(u.jsx)("div",{className:"scrollable-table",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{className:"table-header",children:[Object(u.jsx)("td",{children:e.headerOne}),Object(u.jsx)("td",{children:e.headerTwo}),Object(u.jsx)("td",{children:e.headerThree})]}),e.listItems.map((function(e){return Object(u.jsxs)("tr",{className:"table-item",children:[Object(u.jsx)("td",{children:e.col1}),Object(u.jsx)("td",{children:e.col2}),Object(u.jsx)("td",{children:e.col3})]},e.id)}))]})})},w=function(e){var t=e.goNextStep,c=e.goBackStep,n=[{id:1,col1:"Bread",col2:10,col3:"kg"},{id:2,col1:"Salmon",col2:5,col3:"kg"},{id:3,col1:"Rice",col2:8,col3:"kg"},{id:4,col1:"Grill Meat",col2:10,col3:"kg"},{id:5,col1:"Regular Milk",col2:10,col3:"Liter"},{id:6,col1:"Bread",col2:10,col3:"kg"},{id:7,col1:"Salmon",col2:5,col3:"kg"},{id:8,col1:"Rice",col2:8,col3:"kg"},{id:9,col1:"Grill Meat",col2:10,col3:"kg"},{id:10,col1:"Regular Milk",col2:10,col3:"Liter"},{id:11,col1:"Bread",col2:10,col3:"kg"},{id:12,col1:"Salmon",col2:5,col3:"kg"},{id:13,col1:"Rice",col2:8,col3:"kg"},{id:14,col1:"Grill Meat",col2:10,col3:"kg"},{id:15,col1:"Regular Milk",col2:10,col3:"Liter"}],a=[{id:1,col1:"Clean up friday",col2:"Jens",col3:"Peter, Marie"},{id:2,col1:"Shopping",col2:"Jens",col3:"Peter, Marie"},{id:3,col1:"clean up saturday",col2:"Jens",col3:"Peter, Marie"},{id:4,col1:"Accounting",col2:"Jens",col3:"Peter, Marie"},{id:5,col1:"Plan treasure hunt",col2:"Jens",col3:"Peter, Marie"},{id:6,col1:"Treasure hun staff",col2:"Jens",col3:"Peter, Marie"},{id:7,col1:"Cooking friday lunch",col2:"Jens",col3:"Peter, Marie"},{id:8,col1:"Cooking saturday dinner",col2:"Jens",col3:"Peter, Marie"},{id:9,col1:"Dishes friday lunch",col2:"Jens",col3:"Peter, Marie"},{id:10,col1:"Dishes friday dinner",col2:"Jens",col3:"Peter, Marie"}];return Object(u.jsx)(u.Fragment,{children:[{excursionId:1,type:"Wilderness Trip",where:"Sweden",date:"31. june - 5 july 2022",adults:40,teenagers:12,children:14,shoppingList:[]}].map((function(e){return Object(u.jsxs)("div",{className:"single-excursion-overview",children:[Object(u.jsxs)("div",{className:"single-excursion-row",children:[Object(u.jsx)("p",{children:e.type}),Object(u.jsx)("p",{children:e.where}),Object(u.jsx)("p",{children:e.date})]}),Object(u.jsxs)("div",{className:"detail-row",children:[Object(u.jsxs)("div",{className:"specification-row",children:[Object(u.jsx)("div",{className:"specification-text",children:Object(u.jsx)("p",{children:"Number of people: "})}),Object(u.jsxs)("div",{className:"specification-items",children:[Object(u.jsxs)("h3",{children:["Adults: ",e.adults]}),Object(u.jsxs)("h3",{children:["Teenagers: ",e.teenagers]}),Object(u.jsxs)("h3",{children:["Children: ",e.children]})]})]}),Object(u.jsx)(y,{text:"Sign up",onClick:t})]}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Shopping List"})}),Object(u.jsx)(S,{listItems:n,headerOne:"Item",headerTwo:"Amount",headerThree:"Unit"}),Object(u.jsx)("h1",{children:"Duty List"}),Object(u.jsx)(S,{listItems:a,headerOne:"Duty",headerTwo:"Boss",headerThree:"Manning"}),Object(u.jsx)(k,{onClick:c})]})}))})},C=c(25),I=c.n(C),F=c(39);c(570);var D=function(e){return Object(u.jsxs)("div",{className:"overview-container",children:[Object(u.jsxs)("div",{className:"border-header",children:[Object(u.jsx)("p",{className:"header",children:"Type"}),Object(u.jsx)("p",{className:"header",children:"Where"}),Object(u.jsx)("p",{className:"header",children:"Date"})]}),Object(u.jsxs)("div",{className:"info-excursion-container",children:[Object(u.jsx)("div",{className:"info",children:Object(u.jsx)("h2",{children:e.type})}),Object(u.jsx)("p",{className:"line",children:"|"}),Object(u.jsx)("div",{className:"info",children:Object(u.jsx)("h2",{children:e.where})}),Object(u.jsx)("p",{className:"line",children:"|"}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h2",{children:e.fromDate}),Object(u.jsx)("h2",{children:"-"}),Object(u.jsx)("h2",{children:e.toDate})]})]})]})};c(571),c(572);var P=function(){var e=function(){return Object(u.jsx)("hr",{style:{background:"#2F796D",backgroundColor:"#22F796D",height:5,width:200}})};return Object(u.jsx)(e,{})};var T=function(e){var t=e.pageTitle;return Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)(P,{})]})},A=function(e){var t=e.goNextStep,c=Object(l.f)();var a=Object(n.useState)([]),s=Object(h.a)(a,2),r=s[0],i=s[1];function o(){return d.apply(this,arguments)}function d(){return(d=Object(F.a)(I.a.mark((function e(){var t,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new j.a.Query("Excursion")).select("name"),t.select("country"),t.select("from_date"),t.select("to_date"),e.prev=5,e.next=8,t.find();case 8:c=e.sent,i(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),alert("Error: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return"Organizer"===j.a.User.current().get("role")?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{pageTitle:"Excursions"}),Object(u.jsx)(y,{text:"Create new Excursion",onClick:function(){c("/createExcursion")}}),Object(u.jsx)(y,{onClick:o,text:"Get excursions"}),Object(u.jsx)("div",{className:"all-excursions",children:r.map((function(e){return Object(u.jsxs)("div",{className:"one-excursion",children:[Object(u.jsx)(D,{type:e.get("name"),where:e.get("country"),fromDate:e.get("from_date"),toDate:e.get("to_date"),actionBtn:"Get Info"},e.get("ObjectId")),Object(u.jsx)("div",{className:"button-getinfo",children:Object(u.jsx)(y,{text:"Get info",onClick:t})})]})}))})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{pageTitle:"Excursions"}),Object(u.jsx)(y,{onClick:o,text:"Get excursions"}),Object(u.jsx)("div",{className:"all-excursions",children:r.map((function(e){return Object(u.jsxs)("div",{className:"one-excursion",children:[Object(u.jsx)(D,{type:e.get("name"),where:e.get("country"),fromDate:e.get("from_date"),toDate:e.get("to_date"),actionBtn:"Get Info"},e.get("ObjectId")),Object(u.jsx)("div",{className:"button-getinfo",children:Object(u.jsx)(y,{text:"Get info",onClick:t})})]})}))})]})};var B=function(e){var t=e.onClick;return Object(u.jsx)("button",{className:"next-button",onClick:t,type:"submit",children:Object(u.jsx)("p",{children:"Next"})})};var E=function(e){var t=e.goNextStep,c=e.goBackStep,n=e.handleData,a=e.memberInput;function s(){return s=Object(F.a)(I.a.mark((function e(){var c,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.a.Object.extend("User"),(c=j.a.User.current()).set("username",a.memberFirstname),c.set("lastname",a.lastname),c.set("address",a.address),c.set("phone",a.phone),c.set("memberAge",a.memberAge),e.prev=7,e.next=10,c.save();case 10:n=e.sent,console.log(n),t(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),alert("Error "+e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[7,15]])}))),s.apply(this,arguments)}var r=j.a.User.current().get("username");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{pageTitle:"Your Informations"}),Object(u.jsxs)("form",{className:"input-form",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)(p,{title:"First name",type:"text",name:"memberFirstname",value:r,onChange:n("memberFirstname")}),Object(u.jsx)(p,{title:"Last name",type:"text",name:"lastname",value:a.lastname,onChange:n("lastname")}),Object(u.jsx)(p,{title:"Address",type:"text",name:"adress",value:a.address,onChange:n("address")}),Object(u.jsx)(p,{title:"Phone number",type:"number",name:"phone",value:a.phone,onChange:n("phone")}),Object(u.jsx)(p,{title:"Age",type:"number",name:"memberAge",value:a.memberAge,onChange:n("memberAge")}),Object(u.jsxs)("div",{className:"button-row",children:[Object(u.jsx)(k,{onClick:c}),Object(u.jsx)(B,{onClick:function(){return s.apply(this,arguments)}})]})]})]})},M=c(244);c(573);var L=function(e){return e.trigger?Object(u.jsx)("div",{className:"alert",children:Object(u.jsxs)("div",{className:"alert-inner",children:[Object(u.jsx)("h1",{children:"Are you sure you want to delete?"}),Object(u.jsxs)("div",{className:"container-btns",children:[Object(u.jsx)("button",{className:"green-button",onClick:function(){return e.setTrigger(!1)},children:Object(u.jsx)("p",{children:"Cancel"})}),Object(u.jsx)("button",{className:"red-btn",children:Object(u.jsx)("p",{children:"Delete"})})]})]})}):""};var R=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"green-button",onClick:function(){return a(!0)},children:Object(u.jsx)("p",{children:"Delete"})}),Object(u.jsx)(L,{trigger:c,setTrigger:a})]})};var U=function(e){var t=e.goNextStep,c=e.goBackStep,n=e.handleData,a=e.familyInput,s=e.setFamilyInput;function r(){return(r=Object(F.a)(I.a.mark((function e(){var c,n,s,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.a.Object.extend("FamilyMembers"),n=j.a.User.current(),(s=new c).set("familyFirstname",a.familyFirstname),s.set("familyAge",a.familyAge),s.set("memberRelation",n),e.prev=6,e.next=9,s.save();case 9:r=e.sent,console.log("Family members added"+r.id),t(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),alert("Error "+e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{pageTitle:"Add Family Members"}),Object(u.jsxs)("form",{className:"input-form",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsxs)("div",{className:"col-row",children:[Object(u.jsx)(p,{title:"First name",type:"text",name:"familyFirstname",value:a.familyFirstname,onChange:n("familyFirstname")}),Object(u.jsx)(p,{title:"Age",type:"number",name:"familyAge",value:a.familyAge,onChange:n("familyAge")})]}),Object(u.jsx)("div",{className:"info-col",children:Object(u.jsx)("h2",{children:"Duty Priorities"})})]}),Object(u.jsx)("br",{}),Object(u.jsx)("hr",{className:"horizontal-line"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"add-button",children:[Object(u.jsx)(y,{text:"Add new family member",onClick:function(){s([].concat(Object(M.a)(a),[{familyFirstname:"",familyAge:""}])),console.log("add new member clicked")}}),Object(u.jsx)(R,{onClick:function(){console.log("member deleted")}})]}),Object(u.jsxs)("div",{className:"button-row",children:[Object(u.jsx)(k,{onClick:c}),Object(u.jsx)(B,{onClick:function(){return r.apply(this,arguments)}})]})]})]})};var J=function(e){var t=e.goNextStep,c=e.goBackStep,n=e.skipStep;return Object(u.jsxs)("div",{className:"info-box-container",children:[Object(u.jsx)(T,{pageTitle:"Transportation"}),Object(u.jsx)("div",{className:"info-box",children:Object(u.jsxs)("div",{className:"info-box-row",children:[Object(u.jsx)(y,{text:"No car",onClick:n}),Object(u.jsx)(y,{text:"Register car",onClick:t})]})}),Object(u.jsx)("div",{className:"single-button-row",children:Object(u.jsx)(k,{onClick:c})})]})};var G=function(e){var t=e.goNextStep,c=e.goBackStep,n=e.handleData,a=e.carInput;function s(){return(s=Object(F.a)(I.a.mark((function e(){var c,n,s,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.a.Object.extend("Car"),n=j.a.User.current(),(s=new c).set("licenseplate",a.licensePlate),s.set("color",a.color),s.set("cartype",a.carType),s.set("numberoffreeseats",a.numberOfFreeSeats),s.set("memberRelation",n),e.prev=8,e.next=11,s.save();case 11:r=e.sent,console.log("New car added "+r.id),t(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),alert("Error "+e.t0.message);case 19:case 20:case"end":return e.stop()}}),e,null,[[8,16]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"placeholder",children:[Object(u.jsx)(T,{pageTitle:"Add car"}),Object(u.jsxs)("form",{className:"input-form",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)(p,{title:"License plate",type:"text",name:"licensePlate",value:a.licensePlate,onChange:n("licensePlate")}),Object(u.jsx)(p,{title:"Color",type:"text",name:"color",value:a.color,onChange:n("color")}),Object(u.jsx)(p,{title:"Car type",type:"text",name:"carType",value:a.carType,onChange:n("carType")}),Object(u.jsx)(p,{title:"Number of free seats",type:"number",name:"numberOfFreeSeats",value:a.numberOfFreeSeats,onChange:n("numberOfFreeSeats")}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"add-button",children:[Object(u.jsx)(y,{text:"Add another car",onClick:function(){}}),Object(u.jsx)(R,{onClick:function(){}})]}),Object(u.jsxs)("div",{className:"button-row",children:[Object(u.jsx)(k,{onClick:c}),Object(u.jsx)(B,{onClick:function(){return s.apply(this,arguments)}})]})]})]})};var Y=function(e){var t=e.skipStep,c=e.goNextStep,n=e.goBackStep;return Object(u.jsxs)("div",{className:"info-box-container",children:[Object(u.jsx)(T,{pageTitle:"Book extra car seats"}),Object(u.jsxs)("div",{className:"info-box",children:[Object(u.jsx)("div",{className:"info-box-row",children:Object(u.jsx)("h2",{children:"Do you need extra car seats?"})}),Object(u.jsxs)("div",{className:"info-box-row",children:[Object(u.jsx)(y,{text:"I'm fine",onClick:t}),Object(u.jsx)(y,{text:"Yes, book seats",onClick:c})]})]}),Object(u.jsx)("div",{className:"single-button-row",children:Object(u.jsx)(k,{onClick:n})})]})};var _=function(e){var t=e.goNextStep,c=e.goBackStep,n=e.handleData,a=e.seatInput;function s(){return(s=Object(F.a)(I.a.mark((function e(){var c,n,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.a.Object.extend("NeededCarSeats"),(n=new c).set("numberOfSeats",a.numberOfSeats),e.prev=3,e.next=6,n.save();case 6:s=e.sent,console.log("Needed seats added: "+s.id),t(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),alert("Error "+e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"info-box-container",children:[Object(u.jsx)(T,{pageTitle:"Book extra car seats"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)("div",{className:"info-box",children:Object(u.jsx)(p,{title:"How many seats do you need?",type:"number",name:"neededSeats",value:a.neededSeats,onChange:n("neededSeats")})}),Object(u.jsxs)("div",{className:"button-row",children:[Object(u.jsx)(k,{onClick:c}),Object(u.jsx)(B,{onClick:function(){return s.apply(this,arguments)}})]})]})]})},z=function(e){var t=e.memberInput,c=e.familyInput,n=e.carInput,a=e.seatInput,s=(e.goBackStep,t.memberFirstname),r=t.lastname,i=t.address,o=t.email,j=t.phone,d=t.memberAge,b=c.familyFirstname,x=c.familyAge,m=n.licensePlate,O=n.color,h=n.carType,p=n.numberOfFreeSeats,f=a.neededSeats;l.f;return Object(u.jsxs)("div",{className:"info-box-container",children:[Object(u.jsx)(T,{pageTitle:"Your registration"}),Object(u.jsxs)("div",{className:"confirm-info",children:[Object(u.jsxs)("div",{className:"confirm-info-row",children:[Object(u.jsx)("h2",{children:"Your information"}),Object(u.jsxs)("div",{className:"confirm-details",children:[Object(u.jsx)("h3",{children:"First name"})," ",s,Object(u.jsx)("h3",{children:"Last name"})," ",r,Object(u.jsx)("h3",{children:"Address"})," ",i,Object(u.jsx)("h3",{children:"E-mail"})," ",o,Object(u.jsx)("h3",{children:"Phone"})," ",j,Object(u.jsx)("h3",{children:"Age"})," ",d]})]}),Object(u.jsxs)("div",{className:"confirm-info-row",children:[Object(u.jsx)("h2",{children:"Your familiy members"}),Object(u.jsxs)("div",{className:"confirm-details",children:[Object(u.jsx)("h3",{children:"First name"})," ",b,Object(u.jsx)("h3",{children:"Age"})," ",x]})]}),Object(u.jsxs)("div",{className:"confirm-info-row",children:[Object(u.jsx)("h2",{children:"Transportation"}),Object(u.jsxs)("div",{className:"confirm-details",children:[Object(u.jsx)("h3",{children:"You have registered car(s):"}),Object(u.jsxs)("p",{children:[" ",m," - ",O," - ",h," "]}),Object(u.jsxs)("h3",{children:["You have ",p," available seat(s)"]}),Object(u.jsxs)("h3",{children:["You are in need of ",f," number of additional seats"]}),Object(u.jsx)("h3",{children:"You will recieve an e-mail when the car seat reservation is open."})]})]})]}),Object(u.jsx)("div",{className:"button-row",children:Object(u.jsx)(y,{text:"Confirm",onClick:function(){console.log("Confirm clicked")}})})]})};var W=function(){var e=Object(n.useState)(1),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({memberFirstname:"",lastname:"",address:"",email:"",phone:"",memberAge:""}),r=Object(h.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)([{familyFirstname:"",familyAge:""}]),j=Object(h.a)(o,2),d=j[0],b=j[1],x=Object(n.useState)({licensePlate:"",color:"",carType:"",numberOfFreeSeats:""}),m=Object(h.a)(x,2),O=m[0],p=m[1],f=Object(n.useState)({neededSeats:""}),v=Object(h.a)(f,2),k=v[0],y=v[1],S=function(){a(c+1)},C=function(){a(c-1)},I=function(){a(c+2)};switch(c){case 1:return Object(u.jsx)(A,{goNextStep:S});case 2:return Object(u.jsx)(w,{goNextStep:S,goBackStep:C});case 3:return Object(u.jsx)(E,{goNextStep:S,goBackStep:C,handleData:function(e){return function(t){var c=t.target.value;l((function(t){return Object(N.a)(Object(N.a)({},t),{},Object(g.a)({},e,c))}))}},memberInput:i});case 4:return Object(u.jsx)(U,{goNextStep:S,goBackStep:C,handleData:function(e){return function(t){var c=t.target.value;b((function(t){return Object(N.a)(Object(N.a)({},t),{},Object(g.a)({},e,c))}))}},familyInput:d,setFamilyInput:b});case 5:return Object(u.jsx)(J,{goNextStep:S,skipStep:I,goBackStep:C});case 6:return Object(u.jsx)(G,{goNextStep:S,goBackStep:C,handleData:function(e){return function(t){var c=t.target.value;p((function(t){return Object(N.a)(Object(N.a)({},t),{},Object(g.a)({},e,c))}))}},carInput:O});case 7:return Object(u.jsx)(Y,{goNextStep:S,skipStep:I,goBackStep:C});case 8:return Object(u.jsx)(_,{goNextStep:S,goBackStep:C,handleData:function(e){return function(t){var c=t.target.value;y((function(t){return Object(N.a)(Object(N.a)({},t),{},Object(g.a)({},e,c))}))}},seatInput:k});case 9:return Object(u.jsx)(z,{memberInput:i,familyInput:d,carInput:O,seatInput:k,goBackStep:C});default:return Object(u.jsx)(A,{})}};var K=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(W,{})})};var Q=function(){return Object(u.jsx)("h1",{children:"Hello Book Seats"})};var H=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Feedback"})})},X=(c(574),c.p+"static/media/profile_picture.f0daab2d.png");var V=function(){var e="Oscar Petersen",t="Oscar_Petersen@gmail.com",c=45,n="Rued Langgaards vej 7, 2300 K\xf8benhavn S",a=24254546;return Object(u.jsxs)("div",{className:"main-container",children:[Object(u.jsx)("h1",{className:"h1-profile",children:"Profile"}),Object(u.jsx)(P,{}),Object(u.jsx)("div",{className:"profile-main-container",children:Object(u.jsxs)("div",{className:"profile-info-container",children:[Object(u.jsxs)("div",{className:"profile-col1",children:[Object(u.jsx)("h2",{className:"header-profile",children:e}),Object(u.jsx)("img",{src:X,className:"profilePic",alt:"ProfilePic"})]}),Object(u.jsxs)("div",{className:"profile-col2",children:[Object(u.jsx)("div",{className:"profile-row-item",children:Object(u.jsx)("h2",{children:"Email:"})}),Object(u.jsx)("div",{className:"profile-row-info",children:Object(u.jsx)("p",{children:t})}),Object(u.jsx)("div",{className:"profile-row-item",children:Object(u.jsx)("h2",{children:"Age:"})}),Object(u.jsx)("div",{className:"profile-row-info",children:Object(u.jsx)("p",{children:c})}),Object(u.jsx)("div",{className:"profile-row-item",children:Object(u.jsx)("h2",{children:"Address:"})}),Object(u.jsx)("div",{className:"profile-row-info",children:Object(u.jsx)("p",{children:n})}),Object(u.jsx)("div",{className:"profile-row-item",children:Object(u.jsx)("h2",{children:"Phone Number:"})}),Object(u.jsx)("div",{className:"profile-row-info",children:Object(u.jsx)("p",{children:a})})]})]})}),Object(u.jsx)("h2",{className:"header-excursions",children:"Registered excursions:"}),Object(u.jsx)("div",{className:"users-excursions",children:Object(u.jsx)("div",{className:"excursion-overview",children:[{excursionId:1,type:"Wilderness Trip",where:"Sweden",date:"31. june - 5 july 2022"},{excursionId:2,type:"Cottage Trip",where:"Norway",date:"4-7 january 2022"},{excursionId:3,type:"Glamping",where:"Denmark",date:"10-12 september 2022"}].map((function(e){return Object(u.jsxs)("div",{className:"excursion",children:[Object(u.jsx)(D,{className:"info-bar",type:e.type,where:e.where,date:e.date,actionBtn:"Get Info"}),Object(u.jsx)("div",{className:"button-info",children:Object(u.jsx)(R,{actionBtn:"Delete Registration"})})]},e.excursionId)}))})})]})};var Z=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(""),b=Object(h.a)(d,2),x=b[0],m=b[1],O=Object(n.useState)(""),f=Object(h.a)(O,2),v=f[0],g=f[1],N=Object(l.f)();function k(){return(k=Object(F.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new j.a.User).setUsername(c),n.setEmail(x),n.setPassword(i),n.set("role",v),e.prev=6,e.next=9,n.signUp();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),alert("Error "+e.t0.message);case 14:N("/profile");case 15:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}function y(e){g(e.target.value)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Register"}),Object(u.jsxs)("form",{className:"input-form",children:[Object(u.jsx)(p,{title:"First name",type:"text",value:c,onChange:function(e){a(e.target.value)}}),Object(u.jsx)(p,{title:"E-mail",type:"email",value:x,onChange:function(e){m(e.target.value)}}),Object(u.jsx)(p,{title:"Password",type:"password",value:i,onChange:function(e){o(e.target.value)}}),Object(u.jsxs)("div",{className:"input-row",children:[Object(u.jsx)("h2",{children:"Your role"}),Object(u.jsxs)("div",{className:"input-role-row",children:[Object(u.jsxs)("label",{className:"input-role-col",children:[Object(u.jsx)("input",{type:"radio",value:"Member",onChange:y,checked:"Member"===v}),Object(u.jsx)("h2",{children:"Member"})]}),Object(u.jsxs)("label",{className:"input-role-col",children:[Object(u.jsx)("input",{type:"radio",value:"Organizer",onChange:y,checked:"Organizer"===v}),Object(u.jsx)("h2",{children:"Organizer"})]})]})]}),Object(u.jsx)("div",{className:"submit-button",children:Object(u.jsx)("button",{onClick:function(e){return k.apply(this,arguments)},className:"green-button",children:Object(u.jsx)("p",{children:"Create user"})})})]})]})};var q=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(""),b=Object(h.a)(d,2),x=b[0],m=b[1],O=Object(n.useState)(""),f=Object(h.a)(O,2),v=f[0],g=f[1],N=Object(n.useState)(""),y=Object(h.a)(N,2),S=y[0],w=y[1],C=Object(n.useState)(""),D=Object(h.a)(C,2),P=D[0],A=D[1],E=Object(l.f)();function M(){return(M=Object(F.a)(I.a.mark((function e(t){var n,a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=j.a.Object.extend("Excursion"),(a=new n).set("name",c),a.set("place",i),a.set("country",x),a.set("from_date",v),a.set("to_date",S),a.set("deadline_date",P),e.prev=9,e.next=12,a.save();case 12:s=e.sent,console.log(s),alert("Excursion registred"),E("/excursions"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(9),alert("Error: "+e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[9,18]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(T,{pageTitle:"Create Excursion"}),Object(u.jsxs)("form",{className:"input-form",children:[Object(u.jsx)(p,{title:"Name of excursion",type:"text",name:"name",value:c,onChange:function(e){a(e.target.value)}}),Object(u.jsx)(p,{title:"Place",type:"text",name:"place",value:i,onChange:function(e){o(e.target.value)}}),Object(u.jsx)(p,{title:"Country",type:"text",name:"country",value:x,onChange:function(e){m(e.target.value)}}),Object(u.jsx)(p,{title:"Date from:",type:"date",name:"fromDate",value:v,onChange:function(e){g(e.target.value)}}),Object(u.jsx)(p,{title:"Date to:",type:"date",name:"toDate",value:S,onChange:function(e){w(e.target.value)}}),Object(u.jsx)(p,{title:"Sign up deadline",type:"date",name:"deadlineDate",value:P,onChange:function(e){A(e.target.value)}}),Object(u.jsxs)("div",{className:"button-row",children:[Object(u.jsx)(k,{onClick:function(){E("/excursions")}}),Object(u.jsx)(B,{text:"Create",onClick:function(e){return M.apply(this,arguments)}})]})]})]})};var $=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(x,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/register",element:Object(u.jsx)(Z,{})}),Object(u.jsx)(l.a,{path:"/login",element:Object(u.jsx)(f,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/excursions",element:Object(u.jsx)(K,{})}),Object(u.jsx)(l.a,{path:"excursionsOverview",element:Object(u.jsx)(A,{})}),Object(u.jsx)(l.a,{path:"/bookSeats",element:Object(u.jsx)(Q,{})}),Object(u.jsx)(l.a,{path:"/feedback",element:Object(u.jsx)(H,{})}),Object(u.jsx)(l.a,{path:"/profile",element:Object(u.jsx)(V,{})}),Object(u.jsx)(l.a,{path:"/createExcursion",element:Object(u.jsx)(q,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/",element:Object(u.jsx)(v,{})})]}),Object(u.jsx)(O,{})]})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,576)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};j.a.initialize("aKa4elDQmoDX7QTNARrGF3MR3JmM5h7uo5jy5uK6","ZF9JDY4h3W9r2YIgeVh2Pjhp1EAuzXJWPG8I98fv"),j.a.serverURL="https://parseapi.back4app.com/",r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root")),ee()},59:function(e,t,c){}},[[575,1,2]]]);
//# sourceMappingURL=main.2a7009ca.chunk.js.map