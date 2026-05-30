// الكلام المتغير في الصفحة الرئيسية

const words = [

"لا تيأس… فرب الخير لا يأتي إلا بالخير 🤍",

"صلِّ على النبي ﷺ 🤍",

"استغفر... فربما فرجك في استغفارك♥️",

"توكل على الله ⚔️",

"كل ضيق وله فرج 🤍",

"ربنا بيختارلك الأحسن دائمًا 🌙",

"لعله خير 🤍",

"ومن يتوكل على الله فهو حسبه 🌕",

"كل تأخيرة من الله... وراءه حكمة جميلة 💛",

"كل ما تضيق قول يا رب 🤍",

"الدعاء يغيّر أقدارًا كنا نظنها مستحيلة ✨",

"الصبر مفتاح الفرج 💕",

"مادام ما قلبك متعلق بالله... عمرك ما هتضيع ♥️",

"رب الخير لا يأتي إلا بالخير 🌙",

"اذكر الله يذكرك ✨",

"أحيانًا بيكون التأخير… أجمل من الاستعجال 💛",

];

// يجيب آخر رقم كان واقف عنده
let index = localStorage.getItem("quoteIndex");

if(index === null){

index = 0;

}else{

index = parseInt(index);

}

// يحط الكلام الحالي
document.getElementById("changingWords").innerText = words[index];

// يغير الكلام كل شوية
setInterval(() => {

index++;

if(index >= words.length){

index = 0;

}

// يحفظ الرقم
localStorage.setItem("quoteIndex", index);

// يغير الكلام
document.getElementById("changingWords").innerText = words[index];

}, 4000);
