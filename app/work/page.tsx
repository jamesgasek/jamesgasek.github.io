import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A showcase of my skills and accomplishments.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm obsessed with tackling problems through applied AI, software development, and robotics. Here's an overview of my professional journey and key projects.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Amazon Robotics - Full Time */}
        <h3 className="font-medium text-lg mb-1 tracking-tighter">
          Amazon Robotics
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, Robotic Sortation Technology - ML / Optimization | Dec 2024 — Present
        </p>
        <p>
          Leading real-time ML and optimization systems for robotic package sortation at scale:
        </p>
        <ul>
          <li>
            Designed, built, and led growth of an LLM-powered AI agent framework to monitor key package processing metrics, perform optimizations, and fix configuration issues completely autonomously within robotic fulfillment centers.
          </li>
          <li>
            Led implementation of a real-time predictive optimization framework to predict and reduce internal package recirculation inefficiencies. Delivered in first six months with millions in projected annual savings.
          </li>
          <li>
            Implemented new data fetching strategy for fulfillment metrics dashboards, reducing feature development time by 60%.
          </li>
          <li>
            Developed microservices in Go, Kotlin, and Scala on serverless AWS infrastructure with strict monitoring, testing, and uptime standards across global fulfillment centers.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Loupt */}
        <Link href="https://www.investloupt.com">
          <h3 className="font-medium text-lg mb-1 tracking-tighter">Loupt</h3>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Technical Co-Founder, 2023 — Present
        </p>
        <p>
          Building a Regulation Crowdfunding platform to democratize access to investment opportunities:
        </p>
        <ul>
          <li>
            Designed and deployed Node.js services and Next.js web application with PostgreSQL on ECS using AWS services.
          </li>
          <li>
            Integrated third-party APIs for KYC/AML, payment processing, and marketing automation.
          </li>
          <li>
            Led development team and collaborated closely with institutional investors and stakeholders.
          </li>
          <li>
            Held regular Scrum meetings and enforced coding standards to maintain velocity and quality.
          </li>
          <li>
            <em>Still spend 90% of my day in the IDE — building, shipping, and iterating.</em>
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Amazon Robotics - Internship */}
        <h1 className="font-medium text-lg mb-1 tracking-tighter">
          Amazon Robotics
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer Intern, QA Automation | Summer 2023
        </p>
        <p>
          Built a serverless React dashboard for QA regression tracking:
        </p>
        <ul>
          <li>
            Developed serverless React app using AWS CDK (Infrastructure as Code) for CI/CD and deployment.
          </li>
          <li>
            Completed project weeks ahead of schedule and iterated based on end-user feedback.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Structural Services */}
        <h3 className="font-medium text-lg mb-1 tracking-tighter">
          Structural Services
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer | Dec 2021 — May 2023
        </p>
        <p>
          Led development of device interaction software for AI-powered construction assistive system:
        </p>
        <ul>
          <li>
            10×-ed wireless image transmission throughput using SIMD for real-time compression.
          </li>
          <li>
            Built C++ interfaces for CV cameras, SBG Systems IMU/GPS, and Micro-Epsilon LiDAR.
          </li>
          <li>
            Enabled centimeter-accurate GPS tracking using RTK positioning.
          </li>
        </ul>


        {/* Notable Projects */}
      {/* <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1> */}
        <h1 className="font-medium text-2xl mb-8 mt-16 tracking-tighter">
          projects
        </h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h3 className="font-medium text-lg mb-1 tracking-tighter">
          CV Hazard Detection Model
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Python, OpenCV, Keras, AWS SageMaker | Lehigh Capstone - Fall 2023
        </p>
        <p>
          Fine-tuned object detection for autonomous cyclist safety with Bethlehem startup, Skillion:
        </p>
        <ul>
          <li>
            Improved off-the-shelf model performance by 100x for cyclist hazard detection.
          </li>
          <li>
            Trained on KITTI, NTNU datasets, and custom Tesla Model S onboard camera data (labeled in-house).
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h3 className="font-medium text-lg mb-1 tracking-tighter">
          Newton Notes
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          SwiftUI | <Link href="https://gasek.net/newtonnotes" className="underline">gasek.net/newtonnotes</Link> | 2024
        </p>
        <p>
          A minimalist, privacy-first gym workout tracker built in pure SwiftUI:
        </p>
        <ul>
          <li>
            Open-source alternative to bloated fitness apps — no accounts, no tracking.
          </li>
          <li>
            Clean, intuitive UI focused on speed and simplicity.
          </li>
        </ul>
      </div>
    </section>
  );
}
