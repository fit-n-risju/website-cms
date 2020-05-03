import React from "react"
import "./Bio.css"
import { useLanguage } from '../components/LanguageProvider'

const Bio = () => {

  const { isEnglish } = useLanguage();

return(
<div>
<div className="bio-stage">
  <div className="bio-pic julia">
  </div>
  <div className="bio-content">
    <div>
    <h2>{isEnglish ? "HI, I'M JULIA!" : "HI, ICH BIN JULIA!"}</h2>
    <br /><br />
    <p>
    {isEnglish ? "Over 10 years ago I was diagnosed with celiac disease (gluten intolerance). Because of this diagnosis, I have a lot of experience with the gluten-free diet and know how it works and what to look out for." : "Vor über 10 Jahren bekam ich die Diagnose, dass ich an der Krankheit Zöliakie (Glutenunvertäglichkeit) leide. Aufgrund dieser Diagnose habe ich mich mit der glutenfreien Ernährung lange auseinander gesetzten und weiß, wie diese abläuft und auf was zu achten ist."}<br /><br />
    {isEnglish ? "I have also developed strategies on how to harmonize these diets with a vegan, balanced and healthy diet. In addition, weight lifting has been an important part of my life since 2013, which also led to a further change in my diet." : "Zudem habe ich Strategien entwickelt, wie man diese Ernährungsformen in Einklang mit einer veganen, ausgewogenen und gesunden Ernährung bringt. Dazu ist seit 2013 der Kraftsport ein wichtiger Teil meines Lebens, welcher auch zu einer weiteren Veränderung in meiner Ernährung führte."} <br /><br />
    {isEnglish ? "Over the years I have worked on harmoniously bringing these components together and developing them further. I‘m excited to share this knowledge and experience with you and support you on your way to a healthy and balanced life!" : "Über die Jahre hinweg habe ich daran gearbeitet diese Komponenten harmonisch zusammen zu führen und weiter zu entwickeln. Dieses Wissen und meine Erfahrungen möchte ich mit euch teilen und euch auf eurem Weg in ein gesundes und ausgewogenes Leben unterstützen."}</p>
    </div>
  </div>
</div>

<div className="bio-stage">
  <div className="bio-content-left">
    <div>
    <h2>{isEnglish ? "HEY THERE, I'M CHRIS!" : "HEY, ICH BIN CHRIS!"}</h2>
    <br /><br />
    <p>{isEnglish ? "Due to my ambitious study program, I quickly came across the challenge of combining my passion for weight lifting and the goal of eating and living healthy. I have made it my task to optimize the sport and the conscious, healthy eating for me despite lack of time." : "Durch meinen anspruchsvollen Studiengang bin ich schnell auf die Herausforderung gestoßen meine Leidenschaft für den Kraftsport und das Ziel mich gesund zu ernähren zu vereinen. Ich habe es mir zur Aufgabe gemacht, trotz Zeitmangel, den Sport und das bewusste, gesunde ernähren für mich zu optimieren."}<br /><br /> 
    {isEnglish ? "I am always accompanied by the question \"How do I provide my body with everything it needs?\" I've always been open to trying new things so I've been through almost every diet. I am also a fighter who tries to push himself to the limit in every training session." : "Hierbei begleitet mich immer die Frage „Wie versorge ich meinen Körper mit allem, was er braucht?“. Ich war schon immer ein „Probierer“, sodass ich nahezu jede Ernährungsform ausprobiert habe. Ich bin auch ein Kämpfer, der in jedem Training versucht, bis an sein Limit zu gehen."}<br /><br />
    {isEnglish ? "In 2015 I decided to go vegan for several reasons. Today I found the perfect balance for my body and I feel comfortable with it. I don't want to pass this knowledge only to friends, I want to share it with everyone who wants to give their body what it deserves with little effort." : "2015 beschloss ich aus mehreren Gründen, vegan zu leben. Heute habe ich für mich die perfekte Balance für meinen Körper gefunden und fühle mich damit wohl. Ich möchte dieses Wissen nicht nur an Freunde und Bekannte weitergeben, sondern mit allen Menschen teilen, die ihrem Körper mit wenig Aufwand das geben wollen, was er verdient."}</p>
    </div>
  </div>
  <div className="bio-pic chris">
  </div>
</div>
</div>
)
}

export default Bio