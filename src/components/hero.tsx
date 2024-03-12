export interface HeroProps {}

export function Hero(props: HeroProps) {
    return (
        <section className="hero">
            <img className="hero__bg-img" src="/hero-img.png" alt="Hero" />

            <div className="hero__content">
                <p>Discover your strength</p>

                <button className="btn btn-primary">Get Started</button>
            </div>
        </section>
    );
}
