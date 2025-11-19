# The Jellyfish and the Flatworm
A Story About AI Strategy

[![Dan McCreary](https://miro.medium.com/v2/resize:fill:64:64/1*GUTDXrNxjrP3zBgBPOlsNg.jpeg)


![](https://miro.medium.com/v2/resize:fit:1164/1*WT3K6DjOZ9dIEMYh3caoTQ.png)

The Jellyfish and the Flatworm both evolved early on planet Earth. But how they evolved holds key lessons in intelligence---images from Wikipedia Commons.

Many executives are pondering difficult decisions about making large investments in AI. For many of them, their lack of a technical background makes it difficult for them to visualize the impact of AI on their customers, their products, and their employees. To help executives make the right strategic decisions, we need powerful storytelling in terms they can understand and remember.

I have been creating a set of stories and metaphors to guide executives when they need to make strategic decisions about AI investment. After testing, my Jellyfish and Flatworm story has been remarkably effective at helping them guide their peers. I would appreciate feedback from my readers if this story is sticky enough to guide your leaders.

At the core, this story is about why Knowledge Representation (KR) must be the core of any cost-effective long-term AI strategy. We will see how Large-Langauge Models (LLMs), Knowledge Graphs (KGs), and Reference Frames (RFs) are moving us closer to general AI and how building hybrids of these three knowledge representation strategies is the best path.

At the end of this story, you can start to ask if your organization is more like a jellyfish or a flatworm. Clues about how much you need to invest in AI will be clear. Let's begin our story.

## The Evolution of Animal Intelligence

About 600 million years ago, animals evolved cells that helped them react to environmental changes. Let's start with the elegant jellyfish. Jellyfish live in the open ocean, far away from complex structures. A jellyfish only needs simple rules to navigate its environment. Jellyfish might move to depths that allow them to capture more prey and avoid their predators. But they are not hunters. They depend on fish drifting into their tentacles.

Jellyfish live in a relatively simple environment and need to be efficient with their energy use. They really don't need a complex centralized nervous system to help them navigate the ocean. If Jellyfish had a big complex brain that required energy, they would quickly starve. To survive, they needed to keep things simple.

In contrast, on the ocean floor, things were getting **much** more complicated. To seek their prey and avoid predators, animals like flatworms started to develop muscles to help them move around. They also developed more cells on their skin that could process complex signals such as light, temperature, and smell. They used these sensory systems to get detailed information about their environment. And like the jellyfish, they also developed rules to survive. But not all the rules stayed simple. Knowing both **what** rules to follow and **when** to follow them became more complex.

Flatworms are thought to be the first hunters.

## Movement and the Evolution of the Central Nervous System in Flatworms

![](https://miro.medium.com/v2/resize:fit:1400/1*ECQpL1DYndwJrhAWlVtCjA.png)

Movement requires animals to sense where they are in their environment and to remember when to execute rules. Image: DALL-E 3.

Then something really interesting started to happen. Flatworms started to **centralize** where these rules were executed. Putting them all near their front-facing sensors made sense. We now call that the "head" of our animals. They started to evolve a complex network of centralized nerve cells, which we now call a centralized nervous system or CNS in their heads. These networks of communicating nerve cells evolved to become the brains of animals that move about in the world.

So why did they need to build such complex and energy-consuming cells? The key thing to understand is that **movement makes executing rules complicated**. Like an anemone, a plant sits in a single location on the ocean floor. It does not need to understand how things change if it moves. But any animal that moves needs to start to learn the structure of its environment. If it turns around 180 degrees, it needs to know that this helps it move away from predators. The bottom line is that we can't really understand animal intelligence without having a deep appreciation for understanding how intelligence and **models** of our world are tied to motion and, importantly, maps and structure.

## The Evolution World Models in Brains

![](https://miro.medium.com/v2/resize:fit:1056/1*VaA-Uj6PdPt0pYTo46datA.png)

The flatworm had one of the first centralized nervous systems to help it navigate its world. Image credit: <https://vimeo.com/37417377>

Let's explore why storing models of the world around it gave these flatworms a competitive advantage over their siblings. We ask, how can we have more precise ways to know what rules to execute and when to execute these rules in order to survive?

Imagine two flatworms. One that had a precise model of the world around them in their brain, and another that did not have a precise model. As these animals crawled out of their holes to seek their prey, those with a more precise model would remember where the best food was. They could also remember where predators threatened them. You can think of these models as internal maps of a flatworm's surroundings. They used these models to give themselves a competitive advantage. They had more offspring, and these offspring also built more precise models of the world around them. We call these models "world models" because their structure represents the world around them.

The key point here is that these early nervous systems evolved into many other much more complex systems that have become our brains. Humans out-competed our extinct ancestors because we could model the world and predict how our actions could help us survive and out-compete our rivals. Modeling what is in our prey or predator's brain can also be very helpful for survival. Does that mammoth think strategically about the consequences of being headed toward a cliff?

In summary, animals have brains that are predictive organs that must model their world and build mental maps of their world. These models advise us on what actions to take to help us survive. They also give us advice on the consequences of we don't think strategically about the complex systems around us.

Let's apply what we learned about jellyfish and flatworms to our organization.

## Language Models and \*Not\* World Models

Now, you might ask, "What does this all have to do with AI?" Much discussion has been about LLMs and how they are used to generate text. But these language models are fundamentally different from the **world** models in our brains. Let's consider how they are different.

LLMs are used to predict the next **word** given a sequence of preceding words. They were never designed to store accurate models of the real world. Language is a collection of symbols we use to describe our world. When we need to communicate ideas between people, we generate sequences of words that fit within patterns called grammar and syntax. Although tools like ChatGPT and Llama 2 are incredibly useful, they were never designed to model the world and simulate the impact that our actions would have on the future states of our worlds.

Don't get me wrong here. I love my GPT-4! But we must be clear. Modeling language is only a shadow of how we communicate about the world. It really is **not** a precise model of the world. It can be complemented with actual models of the world, but fundamentally, the knowledge representation distributed through billions of weights in a neural network has severe limitations with precision, reproducibility, truthfulness, performance, and explainability.

## Knowledge Graphs \*ARE\* World Models

Many of my readers know that I have been deeply involved in building large-scale [Enterprise Knowledge Graphs](https://dmccreary.medium.com/a-definition-of-enterprise-in-ekgs-561283d37deb) (EKGs) for the last six years. Before that, I wrote books on the tradeoffs of using various [NoSQL databases](https://www.manning.com/books/making-sense-of-nosql). I am a person who can quickly visualize how knowledge is represented in computers, and my goal is to explain the tradeoffs of these alternative representations.

Knowledge graphs are the closest thing we have today to modeling our world in computers. Oh, and by the way, if you pick the right graph database, you can get it to scale out over hundreds of servers. [Google](https://blog.google/products/search/introducing-knowledge-graph-things-not/), Amazon, LinkedIn (Microsoft), and even [Pinterest](https://medium.com/pinterest-engineering/interest-taxonomy-a-knowledge-graph-management-system-for-content-understanding-at-pinterest-a6ae75c203fd) have proven this for over ten years.

Just like the flatworm needed to model the **structure** of their environment by building precise maps, knowledge graphs are also the best way for us to manage structure. This can be the **structure** of our customers, our products, and our competition.

## Animal Brains Use Reference Frames

Now, we come to the most interesting fact. Our brains don't really store data like large-language models **or** knowledge graphs. We store knowledge in a form that evolved from building maps of our world. These are called Reference Frames and are described clearly in Jeff Hawkin's book [*A Thousand Brain*](https://towardsdatascience.com/1000-brains-and-the-ekg-8ef7b1764ccd)*s*. Unlike an LLM, their knowledge can be continually updated. And just like scale-out distributed knowledge graphs, their processing is done in parallel. I won't go into too much detail on reference frames here but look to innovative companies like [Numenta](https://www.numenta.com/) to combine reference frames with LLMs to build new AI systems.

The take-home point is that reference frames can teach us many things about intelligence and how we need to use maps and structure to help us make better predictions. There will be more to come on this topic in future blog posts.

## Measuring Complexity In Your Organization

So, should you be building a model of the world in your internal computer systems? Let's take a look at what a simple company might be.

![](https://miro.medium.com/v2/resize:fit:1400/1*EIMFzhzoVcCKv4SFlyQjlA.png)

Imagine a simple company. You make a single product for a single customer and have no competition. Image by the author.

Imagine you supply a single specialized part to another manufacturer. You are good at what you do and get the same contract every year. You don't really have any competition. I would describe this company as living in a simple environment, much like the jellyfish living in the open ocean. We can call this company a "*jellyfish company*." You can probably model your organization using a spreadsheet or a relational database that uses flat file representation of the world with a few very slow JOIN operations if things get complicated. Your IT department doesn't need a huge budget.

Now, let's look at a more complex company. One that has many customers sells many products, and these products each have many competitors. Their structure might look like the following:

![](https://miro.medium.com/v2/resize:fit:1400/1*xQdLwYUf8WOQaJng3CLKJQ.png)

Imagine a company that lives in a complex environment. They sell many products to many competitors, and each product has many competitive products. Image by the author.

You can see that you need a complex model of your world to sell your products in a highly competitive landscape to many types of consumers. You are more like a *flatworm company* than a jellyfish company. You need complex models that include structure, relationships, precision, explainability, and the ability to add new complexity at will.

How you manufacture and market your products can be dauntingly complex. Can you simulate the impact of a price increase on one of your products? Are you modeling customer behavior? Can you predict the impact of a new marketing campaign? Can you explain why sales of some items are dropping off? If you can't do this today, it might be that your model of the real world is **too simple and too flat without structure**. You might need to invest in using a combination of knowledge graphs and LLMs to accelerate your ability to predict the future.

# Conclusion

Today, we are seeing unprecedented investments in artificial intelligence. The first wave is mostly investment in **tools** to make it easier for firms to build intelligent agents that help worker productivity. But all the agent software in the world might not help if your data is trapped in spreadsheets and siloed data. Knowledge needs to be centralized and connected.

Today, jellyfish companies are exceedingly rare. Most companies must deal with rapidly evolving complexity and make precise predictions that require accurate models of the world around them. Companies must focus on building the foundations that will power thousands of intelligent agents working together on centralized knowledge. And remember, going to the cloud will not save you if you have 1,000 silos.

Let me know if this story works for you. You can contact me on [LinkedIn](https://www.linkedin.com/in/danmccreary/) for supporting material like slide decks and tips for executive workshops on AI strategy and planning.