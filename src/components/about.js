import Header from "./Header";

function About() {

    return <div className="container-fluid">
        <Header />
        <div className="row">
            <div className="col mt-5">
                <h2>About us</h2>
                <p className="mt-5">this is a pharmacy website user can add delete edit medicine</p>
                <p>The Medical Store Management System is a comprehensive and user-friendly
                    software designed to streamline the operations of a medical store or pharmacy.
                    The system aims to efficiently manage the inventory, sales, purchases, and overall
                    workflow within a medical store, enhancing productivity, accuracy, and customer service.</p>
            </div>
        </div>
    </div>
}
export default About;