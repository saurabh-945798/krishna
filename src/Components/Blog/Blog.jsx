import React from 'react';

const BlogCard = ({ title, imageUrl, description, authorImage, authorName }) => {
  return (
    <a
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
      href="#"
    >
      <div className="aspect-w-16 aspect-h-11">
        <img className="w-full object-cover rounded-xl" src={imageUrl} alt={title} />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-black group-hover:text-orange-700">
          {title}
        </h3>
        <p className="mt-5 text-gray-700">
          {description || 'Explore the latest news and insights from our experts.'}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <img className="w-8 h-8 rounded-full" src={authorImage} alt={authorName} />
        <div>
          <h5 className="text-sm text-gray-700">{authorName}</h5>
        </div>
      </div>
    </a>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: '1. लेख शीर्षक: "कृष्ण जन्मभूमि विवाद: ऐतिहासिक परिप्रेक्ष्य"      ',
      imageUrl: 'https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/26072019/00/01/56/41/23/86/75/18/1564123867518/659-a-view-of-spectacularly-illuminated-shri-krishna-janmabhoomi-temple-image-97d433c9256963b86e7ea7c2f148b996-IANS.jpg',
      description: '"भगवान कृष्ण के जन्म स्थान को लेकर चल रहे संघर्ष की जड़ों की खोज।"      ',
      authorImage: 'https://i.postimg.cc/K861DHFj/g.jpg',
      authorName: '"दिनेश महाराज जी"'
    },
    {
      title: '"ऐतिहासिक दावे और आस्था: कृष्ण जन्मभूमि की कहानी"',
      imageUrl: 'https://mathuravrindavantourism.co.in/images//tourist-places/sri-krishna-janmasthan-mathura/sri-krishna-janmasthan-mathura-tourism-open-timings.jpg',
      description: '"कृष्ण के जन्म स्थान और विवादित मस्जिद स्थल के पीछे के ऐतिहासिक  को समझना।"',
      authorImage: 'https://i.postimg.cc/K861DHFj/g.jpg',
      authorName: '"दिनेश महाराज जी"'
    },
    {
      title: '"मथुरा की तीर्थ यात्रा: तनावों के बीच मार्गदर्शन"',
      imageUrl: 'https://th-i.thgim.com/public/incoming/ukcj9h/article67790512.ece/alternates/LANDSCAPE_1200/IMG_RASKHAN_SAMADHI_2_1_8HC84AB5.jpg',
      description: '"कैसे चल रहा कृष्ण जन्मभूमि विवाद मथुरा में तीर्थ यात्रियों के अनुभव को बदल रहा है।"',
      authorImage: 'https://i.postimg.cc/K861DHFj/g.jpg',
      authorName: '"दिनेश महाराज जी"'
    }
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-5xl font-bold md:text-4xl md:leading-tight italic text-orange-600">समाचार..</h2>
        <p className="mt-1 text-gray-700">
        मस्जिद विवाद पर स्थानीय समुदाय की बैठक
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
            authorImage={post.authorImage}
            authorName={post.authorName}
          />
        ))}
      </div>
      {/* End Grid */}

      {/* Read More Button */}
      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-orange-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Read more
          <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>
      {/* End Read More Button */}
    </div>
  );
};

export default BlogSection;
