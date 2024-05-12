import aboutI from '../assets/about/aboutI.png';
import aboutII from '../assets/about/aboutII.png';

function About() {
    return ( 
        <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about'>
            {/* 1st About Page */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                {/* Image */}
                <div className='md:w-1/2'>
                    <img src={aboutI} alt="About Image"/>
                </div>

                {/* About Content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Comprometidos con la efectividad de los procesos <span className='text-secondary'>nuestra mision.</span> </h2>
                    <p className='text-tartiary text-large mb-7'>Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta,
                    que permitan satisfacer las expectativas de nuestros clientes, logrando ser la mejor opcion en la cadena logística
                    de distribución.</p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>

            {/* 2nd About Page */}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                {/* Image */}
                <div className='md:w-1/2'>
                    <img src={aboutII} alt="About Image"/>
                </div>

                {/* About Content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Ser un aliado estrategico <span className='text-secondary'>nuestra vision.</span> </h2>
                    <p className='text-tartiary text-large mb-7'>Ser el aliado estratégico más confiable y seguro para sus operaciones de nuestros clientes; por brindar un 
                    servicio de alto valor mediante nuestra flota moderna y equipo altamente calificado.</p>
                    <button className='btnPrimary'>Learn more</button>
                </div>
            </div>
        </div>
     );
}

export default About;