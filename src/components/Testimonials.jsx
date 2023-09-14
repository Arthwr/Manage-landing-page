import avatarAnisha from "../assets/avatar-anisha.png";
import avatarAli from "../assets/avatar-ali.png";
import avatarRichard from "../assets/avatar-richard.png";
import TestimonialsListItem from "./TestimonialsListItem";
import Button from "./Button";

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What&apos;s different about Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row space-x-6">
          {/* Testimonial 1 */}
          <TestimonialsListItem
            photoSrc={avatarAnisha}
            altText={"Anisha"}
            clientName={"Anisha Li"}
            description={
              "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
            }
          />
          {/* Testimonial 2 */}
          <TestimonialsListItem
            photoSrc={avatarAli}
            altText={"Ali"}
            clientName={"Ali Bravo"}
            description={
              "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
            }
            hidden={"true"}
          />
          {/* Testimonial 3 */}
          <TestimonialsListItem
            photoSrc={avatarRichard}
            altText={"Richard"}
            clientName={"Richard Watts"}
            description={
              "Manage has revolutionized our team's workflow, providing a seamless way to oversee major milestones and keep everyone inspired. Thanks to Manage, we've streamlined our subscriptions, eliminated cross-channel confusion, and sharpened our collective focus."
            }
            hidden={"true"}
          />
        </div>
        <div className="my-16">
          <Button color={"whiteOnRed"} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
