const About = () => {
  const aboutData = {
    companyName: 'E-commerce Zone',
    mission:
      "Our mission is to provide you with a seamless and enjoyable shopping journey. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we've got you covered.",
    whyChooseUs: [
      'Diverse Selection: Explore a vast range of products from various categories, all in one place.',
      'Secure Shopping: Your online security is important to us. We use the latest encryption technology to protect your data.',
      'Fast Shipping: We strive to deliver your orders swiftly, so you can enjoy your purchases sooner.',
      'Responsive Support: Our customer support team is ready to assist you with any inquiries or concerns.',
    ],
  };

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Welcome to {aboutData.companyName}!</p>
      <p>{aboutData.mission}</p>
      <p>
        <b>Why Choose Us:</b>
      </p>
      <ul>
        {aboutData.whyChooseUs.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
