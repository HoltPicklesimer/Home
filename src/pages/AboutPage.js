import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
   return (
      <div>
         <Hero title={props.title}></Hero>

         <Content>
            <p>
               Hello, my name is Holt (Ethan) Picklesimer. I am a software
               engineer currently working for Walmart. I obtained my BS in
               Software engineering from Brigham Young University - Idaho April
               2021. I have experience in React, Redux, TypeScript, JavaScript,
               C#, .NET, SQL, HTML, CSS, PHP, C++, C, Java, and Python, among
               others.
            </p>
            <p>
               I am currently a software developer for Walmart Global Tech since
               July 2021. I am part of the COSTL (Checkout Streamlined) team and
               build features for a new POS (Point of Sale) system to replace
               legacy checkout systems that associates use in-store. I led the
               eWIC (Woman, Infants, Children) frontend and framework payment
               implementation for the COSTL system to allow associates to select
               eWIC as another payment option via card or handkey. I am a POS
               expert and POC for COSTL's payment flows and cart implementation.
               I regularly use React, Redux, TypeScript/JavaScript, and Java to
               develop new features and fix issues for the COSTL Framework team,
               but was previously on the frontend team to develop the next-gen
               desktop application. I am determined to improve processes and
               innovate to find the best solution. I enjoy mentoring and
               learning from colleagues so everyone can grow to a greater
               potential.
            </p>
            <p>
               I worked as an application development intern on the Enrollment
               Application Development Team at CareSource, a healthcare company
               located in Dayton, OH, from May 2019 to July 2021. During my time
               at CareSource, I have had the opportunity to work in a Scrum team
               and learn how to do many of the processes of Agile, including
               writing user stories and design documents, participating in
               sprint plannings, retrospectives, and reviews. I was the main
               contributor of the Enrollment Engine Regression Testing Tool,
               which is used to verify existing code does not break when changes
               are made to the Enrollment Engine code and has been used as a
               model for other regression tools in the company. While working on
               the regression tool, I used .NET Framework, Razor webpages, SQL,
               Javascript and jQuery to create mock data to test the Enrollment
               Engine. Besides the regression testing tool, I created a dynamic
               mapping table to store configuration mappings, as well as a UI
               for a configuration management system to allow for easy access to
               creating and modifying compliance items.
            </p>
            <p>
               As my senior project, I wanted to learn more about app
               development, and specifically mobile development. I learned much
               about React Native through the development of{' '}
               <a
                  href='https://play.google.com/store/apps/details?id=com.pickleco.producktivo&hl=en_US&gl=US'
                  target='_blank'
               >
                  ProDucktivo
               </a>
               , a task tracker app that gamifies doing pretty much anything you
               need to do.
            </p>
            <p>
               In my school projects, I had the chance to work in a group with
               two other teammates to develop a{' '}
               <a
                  href='https://github.com/HoltPicklesimer/Gender-Classification'
                  target='_blank'
               >
                  neural network gender classifier
               </a>
               . I led the research for this project to test different layers in
               a neural network using the Keras and TensorFlow Python libraries.
               I also developed an image sorting program to prepare the data
               before classification since it was sorted by name rather than by
               gender. The program uses the labels file provided by the dataset
               to sort each image into either a male or female folder. The
               dataset used was the{' '}
               <a href='http://vis-www.cs.umass.edu/lfw/' target='_blank'>
                  Labeled Faces in the Wild
               </a>{' '}
               dataset, which contains more than 13,000 images. I collaborated
               with over twenty other teammates to write a{' '}
               <a
                  href='https://github.com/HoltPicklesimer/Grad-Planner-Registration-Integration-Software-Requirements-Specification'
                  target='_blank'
               >
                  software requirements specification
               </a>{' '}
               and a{' '}
               <a
                  href='https://github.com/HoltPicklesimer/Grad-Planner-Registration-Integration-Software-Design-Description'
                  target='_blank'
               >
                  software design description
               </a>{' '}
               for an integrated graduation planner and class registration
               system. I also collaborated in another twenty student team to
               write a{' '}
               <a
                  href='https://github.com/HoltPicklesimer/Mobile-Dating-App-Specification'
                  target='_blank'
               >
                  software design description
               </a>{' '}
               for a mobile dating app with a focus on the User Interface. I
               have also worked on a few different{' '}
               <a
                  href='https://mighty-gorge-68223.herokuapp.com/Home/assigns.php'
                  target='_blank'
               >
                  web apps
               </a>{' '}
               using PHP and Node.js
            </p>
            <p>
               Please check out my{' '}
               <a href='https://github.com/HoltPicklesimer' target='_blank'>
                  GitHub
               </a>{' '}
               page and{' '}
               <a
                  href='https://www.linkedin.com/in/holt-picklesimer'
                  target='_blank'
               >
                  LinkedIn
               </a>
               , and contact me using the contact page on this site, on
               LinkedIn, at holtpicklesimer@gmail.com, or 234-281-6994.
            </p>
         </Content>
      </div>
   );
}

export default AboutPage;
