const blogs = [
  {
    id: 1,
    title: 'Get Her Back To School',
    content: "According to data by the United Nations Educational, Scientific and Cultural Organisation,UNESCO, Nigeria has about 20 million out-of-school children, with a larger percentage of them being girls. This is largely as a result of economic barriers and socio-cultural norms and practices that hinder access to education, particularly for girls in marginalized communities.Our Get Her Back to School project is, therefore, dedicated to empowering out-of-school girl children in rural Nigerian communities, who have been denied access to education, to return to school and receive the quality education they deserve and empower them to reach their full potential, thereby contributing to the realization of the Sustainable Development Goal, SDG 4.Through this initiative, we provide support for identified girls by paying their school fees, giving them school bags, and providing educational materials such as notebooks, pens, and pencils. We are also engaging with parents and community leaders on the significance of education and the need for them to prioritise sending their children to school. We believe that if we are to achieve gender equality and ensure equal opportunities for all, we must eliminate barriers to education and empowerment of girls and women in our societies.Together, let's bridge the educational gap and create a brighter future for these marginalized girls.Join us in making a difference in their lives through education.",
    image: "../../images/Get_backtoschool.jpg"
  },
  {
    id: 2,
    title: 'United Against Bullying',
    content: "We often read and hear of distressing incidents of bullying at schools and online spaces that bring to light the pervasive issue of bullying within our society, and underscore the urgent need for proactive measures to address and combat bullying in all its forms.On May 5, 2024, a 10-year-old school boy, Sammy Teusch, from Greenfield in Indiana, USA,reportedly killed himself as a result of relentless bullying he faced at school. His grief-stricken parents said the late Sammy who had “big plans for the future” suffered years of brutal bullying that saw his classmates mock his teeth and glasses.Sammy's devastating story serves as a stark reminder of the far-reaching consequences of bullying. It is for this reason that our organisation embarked on a United Against Bullying campaign to schools in our community. Our mission is to educate students about the harmful effects of bullying and equip them with the knowledge and strategies to prevent it. Bullying significantly hinders learning and affect academic performance, as victims often lose focus in class, unable to participate in classroom activities, and even in some cases, miss classes,or refuse to attend school. Moreover, bullying has negative impacts on mental health and well-being of victims. To address this, it is essential that we cultivate a culture of kindness and inclusivity among young people.Support and join our campaign to stop bullying and harassment at schools and create a safe and more inclusive learning environment for everyone. Together, let's make a difference.",
    image: "../../images/bullying.jpg"
  },
  {
    id: 3,
    title: 'Raising Young Eco-Citizens',
    content: "Climate change is one of the most pressing issues of our time, affecting every corner of the world with increasingly extreme weather conditions, rising sea levels, and the loss of biodiversity. While governments and organizations worldwide are taking steps to mitigate the effects of climate change, one crucial element often overlooked is the education of our youngest citizens. Educating young children about environmental awareness and nature conservation is not just an option - it is a necessity.",
    image: "../../images/climate.jpg"
  }
]

const title = document.querySelector('.cause-title');
const title2 = document.querySelector('.cause-title2');
const content = document.querySelector('.cause-content');
const image = document.querySelector('.cause-image-cont');

const urlParams = new URLSearchParams(window.location.search);

const postParam = urlParams.get('post');

if (postParam !== null && postParam <= blogs.length) {
  const theBlog = blogs.find(blog => blog.id == postParam);
  title.textContent = theBlog.title;
  title2.textContent = theBlog.title;
  content.textContent = theBlog.content;
  image.innerHTML = `<img src="${theBlog.image}" alt="Image" class="img-fluid">`;
  console.log(theBlog);
} else {
  history.back();
}