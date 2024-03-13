export interface AboutProps {}

export function AboutUs(props: AboutProps) {
    return (
        <section className="about">
            <div className="container about__container">
                <div className="about__content">
                    <h2 className="section-header">About Us</h2>
                    <p>
                        Your well-being is your greatest wealth. Whether it's
                        achieving optimal health or enhancing your fitness
                        journey, we're here to support you every step of the
                        way. At our fitness center, our team of certified
                        personal trainers, attentive staff, and experienced
                        management are dedicated to fostering a nurturing
                        environment.
                    </p>
                </div>

                <div className="about__image">
                    <img src="/images/about-us.webp" alt="About Us" />
                </div>
            </div>
        </section>
    );
}
