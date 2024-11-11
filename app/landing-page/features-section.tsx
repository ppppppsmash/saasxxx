import Feature from './feature';

const features = [
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your exsiting tools and services.',
  },
  {
    title: 'Customizable',
    description: 'Customize KUROSAWAXX to fit your needs and preferences.',
  },
  {
    title: 'Analytics',
    description: 'Track and analyze feedback to make informed decisions.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;