const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">  
      {/* Hero Section */}
      <div className="bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center h-[300px] flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          About Our Restaurant
        </h1>
      </div>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Story */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our restaurant, where passion meets flavor. Founded with
            a love for great food and warm hospitality, we strive to create
            unforgettable dining experiences. Our chefs bring together fresh
            ingredients and authentic recipes to serve dishes that delight every
            palate.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple — to serve high-quality, delicious food in a
            welcoming environment. We believe in using locally sourced
            ingredients, maintaining high standards, and ensuring every guest
            leaves with a smile.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We use only the freshest and finest ingredients in every dish.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
            <p className="text-gray-600">
              Our experienced chefs craft meals with passion and creativity.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Cozy Ambience</h3>
            <p className="text-gray-600">
              Enjoy your meals in a warm and welcoming atmosphere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;