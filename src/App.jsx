import React, { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion"
import AddToCalendar from './components/AddToCalendar';
import { eventDetails } from './constants/calendar';
import music from './assets/thinking_out_loud.mp3'
import circle_image from './assets/2.webp'
import circle_names from './assets/circle_names.svg'
import church_video from './assets/church.mp4'
import church_image from './assets/church.jpg'
import venue_image from './assets/venue.jpg'
import slideshow1 from './assets/slideshow/slideshow-1.webp'
import slideshow2 from './assets/slideshow/slideshow-2.webp'
import slideshow3 from './assets/slideshow/slideshow-3.webp'
import slideshow4 from './assets/slideshow/slideshow-4.webp'
import slideshow5 from './assets/slideshow/slideshow-5.webp'
import blazer from './assets/blazer.svg'
import dress from './assets/dress.svg'
import present from './assets/present.webm'
import liverpool from './assets/liverpool.jpg'
import amazon from './assets/amazon.png'
import plane from './assets/plane.webm'
import './App.css'


function App() {
	const [ init, setInit ] = useState(false);
	const [ audioPlaying, setAudioPlaying ] = useState(false);
	const audio = useRef();
    useEffect(() => {

	new	window.particlesJS('particles-js',{"particles":{"number":{"value":62,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":0.5,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})
	new window.FlipDown(1732456800, { theme: 'light', headings: ["Dias", "Horas", "Minutos", "Segundos"] }).start();

    }, []);

	const reproduceMusic = () => {
		audio.current.volume = 0.1;
		if(audio.current.paused) {
			audio.current.play();
			setAudioPlaying(true);
		} else {
			audio.current.pause();
			setAudioPlaying(false);
		}
	}

	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i) => {
		  const delay = 1 + i * 2;
		  return {
			pathLength: 1,
			opacity: 1,
			transition: {
			  pathLength: { delay, type: "spring", duration: 6, bounce: 0 },
			  opacity: { delay, duration: 6 }
			}
		  };
		}
	  };

	  const genericDraw = {
		hidden: { pathLength: 0, opacity: 0, pathOffset: 1 },
		visible: (i) => {
		  const delay = 1 + i * 0.5;
		  return {
			pathLength: 1,
			pathOffset: 0,
			opacity: 1,
			transition: {
			  pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
			  opacity: { delay, duration: 0.01 }
			},
			whileInView: {once: true, amount: 0.8 }
		  };
		}
	  };

	const onVenue = () => {
		const googleMapsUrl = `https://maps.app.goo.gl/5qjPm5FQKsHawfzj6?g_st=iw`;
    	window.open(googleMapsUrl, '_blank');
	}

	const onChurch = () => {
		const googleMapsUrl = `https://maps.app.goo.gl/so1diDeUeixwgMY99?g_st=iw`;
    	window.open(googleMapsUrl, '_blank');
	}

  return (
    <>
    <main className="invitation">

	<div id="particles-js" style={{width: '100%', height: '100%', position: 'absolute'}}></div>
		<section className="content">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 3 }}
				style={{ alignSelf: 'end'}}
			>
				<p className="getting-married">We are getting married</p>
			</motion.div>
			<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 3 }}
			>
				<h1 className="names">Gabriela</h1>
			</motion.div>
			<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 3 }}
			>
				<span className="and">&</span>
			</motion.div>
			<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 3 }}
			>
				<h1 className="names">Alejandro</h1>
			</motion.div>
			
			<div className="calendar">
				<motion.div
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 3 }}
				>
					<h2>Noviembre</h2>
				</motion.div>
				<motion.div className="weekdays"
				initial={{ opacity: 0, x: -500 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 4 }}
				>
					<span>Ju</span>
					<span>Vi</span>
					<span>Sa</span>
					<span className="highlight">Do</span>
					<span>Lu</span>
					<span>Ma</span>
					<span>Mi</span>
				</motion.div>
				<motion.div className="dates"
				initial={{ opacity: 0, x: -500 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 5 }}
				>
					<span>21</span>
					<span>22</span>
					<span>23</span>
					<div className="highlight">
						<span>24</span>
						<motion.svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="none" viewBox="0 0 62 62" initial="hidden" animate="visible">
							<motion.path variants={draw} custom={1} stroke="#E2E2E2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M55.542 22.057c0-7.303-5.92-13.223-13.224-13.223-4.808 0-9.004 2.575-11.318 6.412-2.314-3.837-6.51-6.412-11.318-6.412-7.303 0-13.224 5.92-13.224 13.223 0 1.67.323 3.26.887 4.731C11.718 39.365 31 53.166 31 53.166s19.282-13.801 23.655-26.378a13.17 13.17 0 0 0 .887-4.73Z"/>
						  </motion.svg>						  
					</div>
					<span>25</span>
					<span>26</span>
					<span>27</span>
				</motion.div>
			</div>
			
			<motion.p initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 7 }} className="save-date">Save the date</motion.p>
			<AddToCalendar 
			title={eventDetails.title}
			description={eventDetails.description}
			location={eventDetails.location}
			startDate={eventDetails.startDate}
			endDate={eventDetails.endDate}
			/>
		</section>
		
		<button id="audio-toggle" className="audio-toggle" aria-label="Toggle audio" onClick={reproduceMusic}>
			{audioPlaying === true && <svg id="playing" className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
				<path d="M15 6.037c0-1.724-1.978-2.665-3.28-1.562L7.638 7.933H6c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
				<path fillRule="evenodd" d="M16.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 20 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 18 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clipRule="evenodd"/>
			  </svg>}

			  {audioPlaying === false &&<svg id="mute" className="w-6 h-6 text-gray-800 dark:text-white visible" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
				<path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/>
			  </svg>}
	  		  
		</button>
		<audio id="audio" loop ref={audio}>
			<source src={music} type="audio/mp3"/>
		</audio>
	</main>
	<section id="my-story" className="story">
		<motion.div
		 initial={{ opacity: 0 }}
		 whileInView={{ opacity: 1 }}
		 transition={{ duration: 1.5 }}
		 viewport={{ once: true, amount: 0.8 }}
		>
			<p className="sections">Nuestra Historia</p>
		</motion.div>
		<section className="circle-container">
			<div className="circle">
				<img src={circle_image} alt="my story"/>
			</div>
			<img className="names-circle" src={circle_names} />
		</section>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</section>

	<section style={{padding: "1rem", paddingBottom: '0'}} className="countdown">
		<p className="sections">Cuenta Regresiva</p>
		<span className="viernes">Domingo 24 de Noviembre</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" fill="none" viewBox="0 0 335 1">
			<path stroke="#4B4233" d="M0 .5h335"/>
		  </svg>
		  <div id="flipdown" className="flipdown" style={{margin: "1rem 0 1.4rem 0"}}></div>
		  <svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" fill="none" viewBox="0 0 335 1">
			<path stroke="#4B4233" d="M0 .5h335"/>
		  </svg>
	</section>
	<section className="sections-lugares">
		<p className="lugares">Lugares</p>
		<motion.svg xmlns="http://www.w3.org/2000/svg" width="134" height="68" fill="none" viewBox="0 0 134 68" className="lugares-svg"
		initial="hidden"
		whileInView={"visible"}
		>
			<motion.path variants={genericDraw}
        custom={1} stroke="#9D4F4F" d="M10.31 65.384c-33.31-41.239 33.19-44.884 3.153 0 0 0 64.968 5.092 85.613-4.556 26.678-12.467-54.57-8.342-54.57-23.017 0-7.192 31.044-6.713 47.779-13.666 16.734-6.953 14.111-26.711 3.237-21.898-7.512 3.325-5.905 8.232-3.237 8.232s3.88-3.644-.97-7.672c-6.063-5.035-22.938 0-.728 20.859 4.85 4.555 30.801 10.549 43.413 6.953" className="svg-elem-1"></motion.path>
			<motion.ellipse variants={genericDraw}
        custom={2} cx="11" cy="46.5" fill="#9D4F4F" rx="5" ry="5.5" className="svg-elem-2"></motion.ellipse>
		  </motion.svg>		  
		  <video src={church_video} autoPlay playsInline loop muted className="video"></video>
		  <div className="pinpoint">
			  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="39" fill="none" viewBox="0 0 42 39">
				<g clipPath="url(#a)">
				  <path fill="#474747" d="M17.142 9.729c1.462 0 2.797.57 3.858 1.625 1.06-1.056 2.396-1.625 3.858-1.625 2.486 0 4.738 1.712 5.354 4.07.32 1.226.356 3.17-1.289 5.471-1.48 2.07-4 3.968-7.492 5.638a1 1 0 0 1-.863 0c-3.49-1.67-6.011-3.567-7.491-5.638-1.645-2.301-1.609-4.245-1.288-5.47.616-2.36 2.867-4.071 5.353-4.071ZM28.38 14.21c-.413-1.583-1.895-2.732-3.522-2.732-1.19 0-2.277.63-3.064 1.774a.962.962 0 0 1-.794.404.962.962 0 0 1-.794-.404c-.787-1.144-1.874-1.774-3.064-1.774-1.627 0-3.108 1.15-3.522 2.732-.765 2.931 1.987 6.25 7.38 8.931 5.393-2.68 8.146-6 7.38-8.93Z"/>
				  <path fill="#474747" d="M21 0c8.884 0 16.113 6.712 16.113 14.962 0 8.028-14.789 23.116-15.418 23.754A.977.977 0 0 1 21 39a.977.977 0 0 1-.695-.284c-.63-.639-15.418-15.726-15.418-23.754C4.887 6.712 12.115 0 21 0ZM6.772 14.962c0 2.992 2.556 7.823 7.393 13.97 2.77 3.521 5.571 6.549 6.835 7.88 1.264-1.331 4.064-4.359 6.834-7.88 4.837-6.147 7.394-10.978 7.394-13.97C35.228 7.677 28.845 1.75 21 1.75c-7.846 0-14.228 5.927-14.228 13.212Z"/>
				</g>
				<defs>
				  <clipPath id="a">
					<path fill="#fff" d="M42 0H0v39h42z"/>
				  </clipPath>
				</defs>
			  </svg>
		  </div>
	</section>
	<section style={{padding: "1rem", paddingTop: 0}}>
		<p className="sections" style={{marginTop: 0}}>Ceremonia Religiosa</p>
		<span className="great-vibes">9:00 a.m.</span>

		<section style={{padding: "1rem"}} className="card">
				<img src={church_image} alt="church" />
				<p>Parroquia del Sagrado Corazón de Jesús.</p>
				<svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" fill="none" viewBox="0 0 335 1">
					<path stroke="#4B4233" d="M0 .5h335"/>
				</svg>
				<div>
					<button onClick={onChurch}>Como llegar</button>
				</div>
		</section>

	</section>

	<section style={{padding: "1rem"}}>
		<p className="sections" style={{marginTop: 0}}>Recepcion</p>
		<span className="great-vibes">16:00 p.m.</span>

		<section style={{padding: "1rem"}} className="card">
				<img src={venue_image} alt="venue" />
				<p>La Herencia Monterrey, Santiago, Nuevo León.</p>
				<svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" fill="none" viewBox="0 0 335 1">
					<path stroke="#4B4233" d="M0 .5h335"/>
				</svg>
				<div>
					<button onClick={onVenue}>Como llegar</button>
				</div>
		</section>
	</section>

	<section className="slideshow">
		<div className="fade">
			<img src={slideshow1} />
		</div>
		<div className="fade">
			<img src={slideshow2} />
		</div>
		<div className="fade">
			<img src={slideshow3} />
		</div>
		<div className="fade">
			<img src={slideshow4} />
		</div>
		<div className="fade">
			<img src={slideshow5} />
		</div>
	</section>

	<section style={{marginTop: "2rem"}} className="dress-code">
		<svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" fill="none" viewBox="0 0 335 1">
			<path stroke="#4B4233" d="M0 .5h335"/>
		</svg>
		<div style={{display: "flex", justifyContent: "center"}}>
			<img src={blazer} style={{width: '100%', height: '5rem'}} />		
			<p className="sections" style={{whiteSpace: 'nowrap'}}>Dress Code</p>
			<img src={dress} style={{width: '100%', height: '5rem'}} />
		</div>
		<p style={{textAlign: 'center', padding: '0 4rem'}}>Quisieramos ver a los hombres en traje y camisa blanca, detalles que combinen con tu pareja
			para las chicas un vestido con los siguientes colores:</p>
		<div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
			<div style={{width: '3.125rem', height: '3.125rem', borderRadius: '50%', backgroundColor: '#0E0D0D'}}></div>
			<div style={{width: '3.125rem', height: '3.125rem', borderRadius: '50%', backgroundColor: '#455A41'}}></div>
			<div style={{width: '3.125rem', height: '3.125rem', borderRadius: '50%', backgroundColor: '#272D67'}}></div>
			<div style={{width: '3.125rem', height: '3.125rem', borderRadius: '50%', backgroundColor: '#A5639C'}}></div>
			<div style={{width: '3.125rem', height: '3.125rem', borderRadius: '50%', backgroundColor: '#4B4233'}}></div>
		</div>
	</section>

	<section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
		<video src={present} autoPlay playsInline loop muted></video>
		<p className="sections" style={{whiteSpace: 'nowrap'}}>Mesa De Regalos</p>
		<img style={{height: '7rem', borderRadius: '28px', filter: "sepia(1)"}} src={amazon} />
		<button className="wishlist-button">Amazon Wishlist</button>
		<img style={{height: '4rem', borderRadius: '28px', filter: 'sepia(1)'}} src={liverpool} />
		<button className="wishlist-button">Mesa de regalos Liverpool</button>
	</section>

	<section style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
		<svg xmlns="http://www.w3.org/2000/svg" width="335" height="1" fill="none" viewBox="0 0 335 1" style={{width: '100%'}}>
			<path stroke="#4B4233" d="M0 .5h335"/>
		</svg>
		<p className="sections">Confirmar Asistencia</p>
		<video src={plane} autoPlay playsInline loop muted></video>
		<button className="add-calendar">Confirmar</button>
		<p className="sections" style={{marginBottom: '3rem'}}>Estaremos Felices de compartir
			este dia tan especial contigo!</p>
	</section>
    </>
  )
}

export default App
