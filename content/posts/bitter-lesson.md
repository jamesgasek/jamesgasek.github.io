---
title: 'On Rich Sutton''s "The Bitter Lesson"'
date: '2026-09-03'
category: ai
summary: 'Why betting on compute beats encoding our own understanding of a problem.'
---

Last night, I met up with a friend working in a similar field, and we talked about some of the industry patterns we saw emerging and compared how our roles have changed in the last 24 months or so. We both spend a lot of time working with LLMs, "Prompt engineering" (Context engineering? Harness engineering?). Throughout our discussion, we eventually agreed that we'd find the most effective solution to often be to just "get out of the way"- my friend referenced Rich Sutton's ["The Bitter Lesson"](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) . 

In the article, Rich argues that, in the long run, the only thing that matters for a solution to a problem is how effectively you can offload the problem to something bottlenecked (or solved) by raw computation.  Although there are often optimizations that can be made on top of these brute-force style methods, Rich argues that it's probably not worth the trouble. He uses the examples of computer vision, speech recognition, and chess- each of these areas of research began with engineers trying to map their understanding of the problem to some explicit set of rules- some sort of feature extraction, some sort of static approach to the game of chess- only to be eventually outdone by methods of deep-learning and massive training datasets.

Although Moore's Law (in it's literal form) has began to prove inaccurate (due to physical constraints of transistor size)- the meta-point, of the scaling and commoditization of compute, has not. The economic forces behind this are undeniable (see big tech capex groth over the past 5 years). The argument is then, that it's probably a better bet to ride this exponential growth in computational capability, than it is to impose our own (often flawed) understandings of many complex problems. 

This viewpoint is now more relevant than ever ("how AI-pilled are you? / is your company?") Clearly, we see money and development moving in agreement with this article. However, among engineers, I often see a contradicting sentiment- arguments that LLMs are fundamentally flawed; investors and leadership are under some sort of psychosis, and that such investments will lead to the downfall of organizations as we know them. I think this is as much a technical debate as a pessimism / optimisim (political? [effective accelerationism](https://en.wikipedia.org/wiki/Effective_accelerationism)) discussion. Personally, I think the investment and excitement is justified. 

It's also funny to think the article was written in 2019, during the GPT-2 era.  Clearly, this isn't the first time the industry has experienced something like this, and I don't think it will be the last. See also: [Verification, The Key to AI](http://www.incompleteideas.net/IncIdeas/KeytoAI.html) (2001)
