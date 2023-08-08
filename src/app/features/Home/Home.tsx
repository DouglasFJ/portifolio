import "./Home.css"
import CV from "../../../assets/images/cv.svg";
import github from "../../../assets/images/github.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import curriculo from "../../../../public/CurriculoDouglas.pdf";


export default function Home(){
    return(
        <>
            <section className="w-full h-[100vh] pl-[8.33%] pt-[16.30vh] bg-gradient-pastel" >
                <div>
                    <h2>Full-Stack</h2>
                    <h1>Developer</h1>
                    <h5>Douglas Ferreira de Jesus</h5>
                </div>
                <p className="text-2xl 2xl:text-xl xl:text-lg lg:text-base mt-[4vh] w-[700px]" >
                    Desenvolvedor full-stack estagiando em Análise e Desenvolvimento de Sistemas na Caixa Econômica Federal desde jan/2023 onde busco sempre aprender, inovar e entregar soluções de tecnologia para problemas complexos do mercado financeiro.
                </p>
                <div className="mt-[4vh]">
                    <h5 className="text-[#7781A3]" >Tecnologias<span className="text-3xl opacity-50">Stacks</span></h5>
                    <p className="text-2xl 2xl:text-xl xl:text-lg lg:text-base" >Spring Framework | Spring Batch | Angular | React | NodeJS | SCRUM</p>
                </div>
                <div className="flex mt-[4vh]">
                    <a target="_blank" className="hover:opacity-90 mr-9" href="https://github.com/DouglasFJ" title="GitHub">
                        <img className="w-16 2xl:w-14 xl:w-12" src={github} alt="github" />
                    </a>
                    <a target="_blank" className="hover:opacity-90 mr-9" href="https://www.linkedin.com/in/douglasfj/" title="LinkedIn">
                        <img className="w-16 2xl:w-14 xl:w-12" src={linkedin} alt="linkedin" />
                    </a>
                    <a target="_blank" className="hover:opacity-90 mr-9" href={curriculo} download title="Download currículo">
                        <img className="w-16 2xl:w-14 xl:w-12 lg:w-10" src={CV} alt="Currículo" />
                    </a>
                </div>
            </section>
        </>
    )
}