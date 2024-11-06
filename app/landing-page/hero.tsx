import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="grow">
      <div>
        <div>
          <h1>Collect your feedback seamlessly</h1>
          <p>Easily integrate Kurosawa and start collecting feedback today.</p>
        </div>
        <div>
          <Button>Get Start</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;