export default function Case({ children }) {
    return (
        <div className="md:grid md:grid-cols-12 lg:grid lg:grid-cols-12">
            <section className="col-span-10 col-start-2">{children}</section>
        </div>
    );
}
