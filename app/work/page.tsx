import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A showcase of my skills and accomplishments.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm dedicated to pushing the boundaries of software engineering and making a significant impact in the tech industry. Here's an overview of my professional journey and key projects.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href='https://www.investloupt.com' ><h3 className="font-medium text-lg mb-1 tracking-tighter">Loupt</h3></Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          CTO & Co-Founder, 2023 — Present
        </p>
        <p>
          As the Technical Co-Founder of Loupt, a Regulation Crowdfunding social media platform, I'm working to democratize access to investment opportunities:
        </p>
        <ul>
          <li>
            Led the design, implementation, and deployment of scalable, secure, and user-friendly web applications using Next.js, Typescript, and PostgreSQL.
          </li>
          <li>
            Held regular development SCRUM meetings, fostering a collaborative and productive team environment.
          </li>
          <li>
            Implemented and enforced coding standards and best practices, ensuring high-quality code and maintainability.
          </li>
          <li>
            Implement new technologies to maximize our velocity, including Railway, Drizzle, and Neon.
          </li>
          <li  >
              <em>Aside from all the CTO stuff, I still spend 90% of every day in my IDE. </em>
          </li>
        </ul>
       <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Amazon Robotics</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer Intern, Summer 2023
        </p>
        <p>
          At Amazon Robotics, I developed a serverless dashboard for systems testing results as part of the QA Automation team:
        </p>
        <ul>
          <li>
            Modeled, designed, and implemented a serverless dashboard using AWS services, including Lambda, API Gateway, and DynamoDB, to display test results and metrics.
          </li>
          <li>
            Leveraged AWS' Infrastructure-As-Code framework- the Cloud Development Kit (CDK) to enforce secure-by-default constructs, track changes in infrastructure, and enable one-click deployment.
          </li>
            {/* Demonstrated extensive experience with AWS services, including API Gateway, Lambda, S3, Route53, and IAM, demonstrating proficiency in cloud architecture. */}
          <li>
            Completed the project two weeks ahead of schedule, allowing time for design iterations and user-focused improvements.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Structural Services</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2020 — 2023
        </p>
        <p>
          At Structural Services, I led the development of device interaction software for an AI-powered system in the construction industry:
        </p>
        <ul>
          <li>
            Crafted multithreaded C++ programs to handle real-time data from various sensors, including cameras and GPS systems, significantly improving wireless data processing and display. 
          </li>
          <li>
            Integrated multiple third-party device libraries, including those for computer vision cameras, SBG Systems IMU/GPS, and Micro-Epsilon Lidar systems.
          </li>
          <li>
            Developed software for centimeter-accurate GPS tracking using real-time kinematic positioning (RTK), pushing the boundaries of location accuracy in our applications.
          </li>
          <li  >
              <em>Some of my best work came while I was working at Structural Services- they let me play with some nice expensive equipment. To this day, the interaction library for the SBG Ellipse IMU is likely the most complex single executable I have ever made.</em>
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Notable Projects</h2>

        <h3 className="font-medium text-lg mb-1 tracking-tighter">CV Hazard Detection Model</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Python, OpenCV, Keras, AWS SageMaker | Lehigh Capstone - Fall 2023
        </p>
        <p>
          For my Lehigh Capstone project, I developed an advanced computer vision model for hazard detection:
        </p>
        <ul>
          <li>
            Fine-tuned YOLOv5 object detection model to significantly enhance performance for niche applications like detecting cars, pedestrians, and obstacles for cyclists.
          </li>
          <li>
            Utilized diverse datasets, including KITTI and manually collected data, to train the model for various scenarios.
          </li>
          <li>
            Achieved over 200x improvement in performance on nighttime headlight-facing captures, pushing the boundaries of low-light object detection.
          </li>
          <li>
            Implemented the Luxonis DepthAI Python library for the user-facing application, bridging the gap between advanced AI and practical usability.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Community Impact</h2>
        <h3 className="font-medium text-lg mb-1 tracking-tighter">Eagle Scout Project</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Community Service | 2019
        </p>
        <p>
          For my Eagle Scout project, I led a community service initiative to build sitting benches outside the local Hudson Food Pantry:
        </p>
        <ul>
          <li>
            Coordinated and led a team of volunteers, honing my leadership and team management skills.
          </li>
          <li>
            Managed the project from conception to completion, including planning, fundraising, and execution.
          </li>
          <li>
            Collaborated closely with local community leaders and the food pantry to ensure the project met their needs and expectations.
          </li>
        </ul>
      </div>
    </section>
  );
}