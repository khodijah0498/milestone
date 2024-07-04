const blogs = [
  {
    id: 1,
    title: "Get Her Back To School",
    content:
      "According to data by the United Nations Educational, Scientific and Cultural Organisation,UNESCO, Nigeria has about 20 million out-of-school children, with a larger percentage of them being girls. This is largely as a result of economic barriers and socio-cultural norms and practices that hinder access to education, particularly for girls in marginalized communities.Our Get Her Back to School project is, therefore, dedicated to empowering out-of-school girl children in rural Nigerian communities, who have been denied access to education, to return to school and receive the quality education they deserve and empower them to reach their full potential, thereby contributing to the realization of the Sustainable Development Goal, SDG 4.Through this initiative, we provide support for identified girls by paying their school fees, giving them school bags, and providing educational materials such as notebooks, pens, and pencils. We are also engaging with parents and community leaders on the significance of education and the need for them to prioritise sending their children to school. We believe that if we are to achieve gender equality and ensure equal opportunities for all, we must eliminate barriers to education and empowerment of girls and women in our societies.Together, let's bridge the educational gap and create a brighter future for these marginalized girls.Join us in making a difference in their lives through education.",
    image: "../../images/Get_backtoschool.jpg",
    category: "Advocacy",
    background: "danger",
  },
  {
    id: 2,
    title: "United Against Bullying",
    content:
      "We often read and hear of distressing incidents of bullying at schools and online spaces that bring to light the pervasive issue of bullying within our society, and underscore the urgent need for proactive measures to address and combat bullying in all its forms.On May 5, 2024, a 10-year-old school boy, Sammy Teusch, from Greenfield in Indiana, USA,reportedly killed himself as a result of relentless bullying he faced at school. His grief-stricken parents said the late Sammy who had “big plans for the future” suffered years of brutal bullying that saw his classmates mock his teeth and glasses.Sammy's devastating story serves as a stark reminder of the far-reaching consequences of bullying. It is for this reason that our organisation embarked on a United Against Bullying campaign to schools in our community. Our mission is to educate students about the harmful effects of bullying and equip them with the knowledge and strategies to prevent it. Bullying significantly hinders learning and affect academic performance, as victims often lose focus in class, unable to participate in classroom activities, and even in some cases, miss classes,or refuse to attend school. Moreover, bullying has negative impacts on mental health and well-being of victims. To address this, it is essential that we cultivate a culture of kindness and inclusivity among young people.Support and join our campaign to stop bullying and harassment at schools and create a safe and more inclusive learning environment for everyone. Together, let's make a difference.",
    image: "../../images/bullying.jpg",
    category: "Campaign",
    background: "primary",
  },
  {
    id: 3,
    title: "Raising Young Eco-Citizens",
    content:
      "Climate change is one of the most pressing issues of our time, affecting every corner of the world with increasingly extreme weather conditions, rising sea levels, and the loss of biodiversity. While governments and organizations worldwide are taking steps to mitigate the effects of climate change, one crucial element often overlooked is the education of our youngest citizens. Educating young children about environmental awareness and nature conservation is not just an option - it is a necessity.",
    image: "../../images/climate.jpg",
    category: "Education",
    background: "warning",
  },
  {
    id: 4,
    title: "The Period Friendly Project",
    content:
      "Poor menstrual health, otherwise known as \"period poverty,\" affects millions of girls and women worldwide, hindering their education, health, and social status, holding them back from achieving their full potential. This makes period poverty a critical barrier towards gender equality. As an organization that is committed to advancing gender equality, we're taking actions to contribute to the fostering of a period friendly world, where every girl and woman has access to safe and dignified menstrual hygiene management.We do this by educating female students on the importance of maintaining proper menstrual hygiene practices, distribute free reusable sanitary pads to women and girls in underserved communities and train them on how to make cost-effective reusable sanitary pads. We also advocate public policies and initiatives to ensure menstruating women and girls can manage their periods safely, with dignity, and without discrimination.We believe that effective menstrual health hygiene is crucial for preventing health risks and ensuring that menstruation is managed with dignity. It also plays a vital role in empowering women and girls to reach their full potential. Proper menstrual hygiene is essential towards achieving United Nations' Sustainable Development Goals, SDGs: Goal 3: Good Health and Well-being, Goal 4: Quality Education, and Goal 5: Gender Equality.",
    image: "../../images/climate.jpg",
    category: "Advocacy",
    background: "danger",
  },
  {
    id: 5,
    title: "DigiSkills4Kids",
    content:
      "Empowering marginalized children with digital skills is crucial for bridging the gap in our digital divide. In many third-world countries including Nigeria, children especially those from economically-disadvantaged backgrounds lack access to computers and digital literacy until late in their educational journey. This hinders their ability to compete favourably in today's tech-driven world.Our DigiSkills4Kids initiative, therefore, seeks to promote digital education and digital inclusion from early age by empowering marginalized children with relevant digital skills. This, we believe, will open doors to new opportunities and careers for the children, enhance their education and learning experiences, foster innovation and creativity, prepare them for a future driven by technology, and ultimately bridge the digital divide. Let's work together to provide equal access to digital education and empower the next generation of leaders.",
    image: "../../images/climate.jpg",
    category: "Campaign",
    background: "primary",
  },
];

const wordTruncator = word => {
  const words = word.split(' '); // Split the string into an array of words
  if (words.length > 35) { // Check if the number of words exceeds 150
      return words.slice(0, 35).join(' ') + '...'; // Join the first 150 words and add "..."
  }
  return word; // Return the original string if it is 150 words or less
};

const blogContainer = document.querySelector('.blog-nav');

blogContainer.innerHTML = blogs.map(blog => {
  return `
   <div class="col-md-4">
     <div class="cause shadow-sm">
     
       <a href="#" class="cause-link d-block">
         <div class="h-200"><img src="${blog.image}" alt="Image" class="img-fluid"></div>
         <div class="custom-progress-wrap">
           <!-- <span class="caption">80% complete</span> -->
           <div class="custom-progress-inner">
             <div class="custom-progress bg-${blog.background}" style="width: 80%;"></div>
           </div>
         </div>
       </a>

       <div class="px-3 pt-3 border-top-0 border border shadow-sm">
         <span class="badge-${blog.background} py-1 small px-2 rounded mb-3 d-inline-block">${blog.category}</span>
         <h3 class="mb-4"><a href="/causes.html?post=${blog.id}">${blog.title}</a></h3>
         <div class="border-top border-light border-bottom py-2 d-flex">
           <div>${wordTruncator(blog.content)}</div>
           <!-- <div class="ml-auto"><strong class="text-primary">$32,919</strong></div> -->
         </div>
       </div>
     
     </div>
   </div>
 `;
}).join(''); // Use join('') to concatenate the array into a single string
