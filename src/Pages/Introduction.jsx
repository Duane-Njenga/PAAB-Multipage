import WhyUS from "./WhyUs" 
function Intro(){
    return(
        <>
        <section id= "Introduction"
        className="pt-4">
            <h1
            className="text-2xl text-center">Welcome to PAAB Capital</h1>
            <p>
            PAAB Capital is a regulated investment company domiciled in Kenya,
            specializing in delivering optimized returns to clients, regardless of market
            conditions, while minimizing risks. The company employs a diverse trading
            model designed to adapt to various market dynamics, ensuring consistent
            growth for our clients.
            </p>
            
            <p
            className="pt-4"
            >
            PAAB Capital is more than an investment company — it is the portal
            through which wealth flows to new dimensions. Inspired by the vision of
            “places above and beyond,” PAAB Capital empowers clients to transcend
            ordinary limits, unlocking extraordinary financial potential through
            innovative, disciplined, and cutting-edge investment strategies. We are the
            gateway for visionaries, leaders, and families to transfer, grow, and secure
            wealth for generations, with an ethos rooted in trust, transformation, and
            timeless opportunity.  
            </p>

        </section>
        <WhyUS />
        </>
    )
}

export default Intro;