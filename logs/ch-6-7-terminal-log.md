
╭─── Claude Code v2.0.44 ───────────────────────────────────────────────────────────────────────────────────╮
│                                            │ Tips for getting started                                     │
│              Welcome back Dan!             │ Run /init to create a CLAUDE.md file with instructions for … │
│                                            │ ──────────────────────────────────────────────────────────── │
│                  ▗ ▗   ▖ ▖                 │ Recent activity                                              │
│                                            │ No recent activity                                           │
│                    ▘▘ ▝▝                   │                                                              │
│                                            │                                                              │
│          Sonnet 4.5 · Claude Max           │                                                              │
│   /Users/dan/Documents/ws/intro-to-graph   │                                                              │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────╯

> run the chapter-content-generator on chapter 6 at
  @docs/chapters/05-social-network-modeling  Assume a senior-high school student reading
  level.
  Make the tone lighthearted and engaging.
  Tell the reader that although they may not think they have a social network problem, we find
  aspect of social networks everywhere.  Products have reviews, reviews have ratings, reviewers have 
varying credibility based on reputation, even your code checkins on GitHub have can have reputation based
 on the number of times a checkin caused new bugs.  The things you learn in this chapter apply any time 
people with reputations write comments on any system. 
  ⎿  ⧉ Selected 6 lines from docs/prompts/chapter-06-content.md in Visual Studio Code

⏺ I'll help you run the chapter-content-generator skill on the social network modeling chapter. Let me
  first check the current state of the chapter.

⏺ Read(docs/chapters/05-social-network-modeling/index.md)
  ⎿  Error reading file

⏺ Search(pattern: "docs/chapters/06*/index.md")
  ⎿  Found 1 file (ctrl+o to expand)

⏺ Search(pattern: "docs/chapters/05*/index.md")
  ⎿  Found 1 file (ctrl+o to expand)

⏺ Search(pattern: "docs/chapters/**/index.md")
  ⎿  Found 13 files (ctrl+o to expand)

⏺ Found it! The social network modeling chapter is actually chapter 07. Let me read its current state:

⏺ Read(docs/chapters/07-social-network-modeling/index.md)
  ⎿  Read 37 lines

⏺ Perfect! Chapter 7 on Social Network Modeling is ready for content generation. I'll now invoke the
  chapter-content-generator skill with your specific requirements:

> The "chapter-content-generator" skill is running 

⏺ I'll now generate the chapter content following the skill workflow. Let me first gather the necessary
  reference files and course information.

⏺ Read(~/.claude/skills/chapter-content-generator/references/reading-levels.md)
  ⎿  Read 245 lines

⏺ Read(~/.claude/skills/chapter-content-generator/references/content-element-types.md)
  ⎿  Read 595 lines

⏺ Read(docs/course-description.md)
  ⎿  Read 292 lines

⏺ Perfect! Now I have all the context I need. Let me create a TODO list to track the content generation
  process:

⏺ Now I'll generate the comprehensive chapter content with a lighthearted, engaging tone for senior-high
  school students. Let me create the detailed educational content:

⏺ Update(docs/chapters/07-social-network-modeling/index.md)
  ⎿  Updated docs/chapters/07-social-network-modeling/index.md with 1557 additions and 1 removal      
         33    
         34    ---
         35    
         36 -  TODO: Generate Chapter Content
         36 +  ## Introduction: Social Networks Are Everywhere (Yes, Even Where You Don't Expect Them)
         37 +  
         38 +  When you hear "social network," you probably think of Instagram, TikTok, or X (formerly
            +  Twitter). But here's the plot twist: social network patterns show up almost everywhere 
            + in our digital lives, often hiding in plain sight. That Amazon product with 4.7 stars? 
            + It's a social network of reviewers with varying credibility based on their review 
            + history. Your GitHub profile showing contributions and merged pull requests? That's 
            + reputation tracking in a developer social network. Stack Overflow karma points? Reddit 
            + upvotes? Yelp reviewer badges? All social networks.
         39 +  
         40 +  Even your school or workplace runs on social network principles. When teachers assign 
            + group projects, they're creating task networks. When your manager checks who has skills 
            + in Python before assigning a coding project, they're querying a skill network. Any 
            + system where people have reputations, write comments, give ratings, or connect with each
            +  other is fundamentally a social network—and graph databases excel at modeling these 
            + patterns.
         41 +  
         42 +  In this chapter, you'll learn how to model social networks using graph databases, from 
            + simple friend connections to complex systems involving influence, sentiment analysis, 
            + and fake account detection. We'll explore how the same patterns that power Facebook also
            +  power human resources systems, project management tools, and content moderation 
            + platforms. By the end, you'll see social network patterns everywhere you look (you're 
            + welcome for that superpower).
         43 +  
         44 +  ## What Makes Something a Social Network?
         45 +  
         46 +  At its core, a social network is just people (or accounts, or profiles) connected by 
            + relationships. But modern social networks are way more interesting than that simple 
            + definition suggests. They track who influences whom, what content people create, how 
            + others react to that content, and even whether accounts are real humans or bots 
            + pretending to be humans.
         47 +  
         48 +  The magic of graph databases is that they can model all these dimensions naturally. 
            + While a traditional database would store user data in one table, friendships in another 
            + table, posts in a third table, and comments in a fourth table (requiring complex joins 
            + to answer simple questions like "show me my friends' recent posts"), a graph database 
            + stores everything as an interconnected network that mirrors how we actually think about 
            + social relationships.
         49 +  
         50 +  Let's break down the key components that make up modern social networks:
         51 +  
         52 +  - **User Profiles**: The people (or accounts) in the network, with their personal 
            + information, preferences, and history
         53 +  - **Connections**: Relationships between users, which can be symmetric (mutual friends)
            +  or directed (followers)
         54 +  - **Content**: Posts, comments, reviews, photos, videos, or any other user-generated 
            + material
         55 +  - **Interactions**: Likes, shares, comments, reactions, and other ways people engage 
            + with content
         56 +  - **Reputation Signals**: Karma scores, review ratings, follower counts, verification 
            + badges, and trust indicators
         57 +  - **Metadata**: When things happened, where they happened, what device was used, and 
            + other contextual information
         58 +  
         59 +  ## User Profiles: More Than Just Names and Photos
         60 +  
         61 +  Every social network starts with user profiles—the nodes that represent people in the 
            + graph. But unlike a simple contact list, social network profiles are rich with 
            + information that helps the network function better. Your profile isn't just your name 
            + and photo; it's a collection of attributes that helps the system understand who you are,
            +  what you care about, and how trustworthy you are.
         62 +  
         63 +  In a graph database, each user profile is a node with properties. Some properties are 
            + basic (name, email, birth date), while others emerge from user behavior (reputation 
            + score, activity level, account age). The beauty of graph databases' flexible schema is 
            + that different users can have different properties—power users might have badges, 
            + verified accounts might have verification timestamps, and content creators might have 
            + additional metadata about their posting history.
         64 +  
         65 +  Here's what a typical user profile node might contain:
         66 +  
         67 +  | Property Category | Examples | Purpose |
         68 +  |-------------------|----------|---------|
         69 +  | Basic Identity | username, email, display_name, profile_photo | Identify and display 
            + the user |
         70 +  | Demographics | age, location, language, timezone | Personalize content and 
            + connections |
         71 +  | Account Metadata | created_date, last_login, account_status | Track account lifecycle
            +  |
         72 +  | Reputation Signals | reputation_score, verified_badge, strike_count | Indicate 
            + trustworthiness |
         73 +  | Privacy Settings | profile_visibility, messaging_allowed | Control user experience |
         74 +  | Behavioral Metrics | posts_count, avg_response_time, activity_level | Understand user
            +  engagement |
         75 +  
         76 +  <details>
         77 +      <summary>User Profile Graph Model Visualization</summary>
         78 +      Type: graph-model
         79 +  
         80 +      Purpose: Show how user profile nodes connect to other entities in a social network 
            + graph
         81 +  
         82 +      Node types:
         83 +      1. User (blue circles)
         84 +         - Properties: username, email, reputation_score, created_date, verified
         85 +         - Example nodes: "Alice" (verified, reputation: 892), "Bob" (reputation: 234), 
            + "Charlie" (verified, reputation: 1,450)
         86 +  
         87 +      2. Post (light green squares)
         88 +         - Properties: content, timestamp, post_type, visibility
         89 +         - Example nodes: "Alice's vacation photo", "Bob's tech question", "Charlie's 
            + tutorial video"
         90 +  
         91 +      3. Topic (purple triangles)
         92 +         - Properties: topic_name, category
         93 +         - Example nodes: "Photography", "Web Development", "Travel"
         94 +  
         95 +      4. Badge (gold stars)
         96 +         - Properties: badge_name, criteria, rarity
         97 +         - Example nodes: "Top Contributor", "Verified Expert", "Early Adopter"
         98 +  
         99 +      Edge types:
        100 +      1. FOLLOWS (solid blue arrows)
        101 +         - Properties: since_date, notification_settings
        102 +         - Directed: User → User
        103 +         - Example: Bob FOLLOWS Alice, Charlie FOLLOWS Alice
        104 +  
        105 +      2. CREATED (solid green arrows)
        106 +         - Properties: created_timestamp
        107 +         - Directed: User → Post
        108 +         - Example: Alice CREATED "vacation photo"
        109 +  
        110 +      3. INTERESTED_IN (dashed purple arrows)
        111 +         - Properties: interest_level (0-10), added_date
        112 +         - Directed: User → Topic
        113 +         - Example: Alice INTERESTED_IN "Photography" (level: 9)
        114 +  
        115 +      4. EARNED (dotted gold arrows)
        116 +         - Properties: earned_date, achievement_context
        117 +         - Directed: User → Badge
        118 +         - Example: Charlie EARNED "Top Contributor" (2023-05-15)
        119 +  
        120 +      Sample data:
        121 +      - Alice (verified, reputation: 892)
        122 +        ├─ CREATED → "Sunset photography tips" (Post)
        123 +        ├─ INTERESTED_IN → "Photography" (level: 9)
        124 +        ├─ INTERESTED_IN → "Travel" (level: 7)
        125 +        ├─ EARNED → "Top Contributor" badge
        126 +        └─ Followed by Bob and Charlie
        127 +  
        128 +      - Bob (reputation: 234)
        129 +        ├─ FOLLOWS → Alice
        130 +        ├─ FOLLOWS → Charlie
        131 +        ├─ CREATED → "React hooks question" (Post)
        132 +        └─ INTERESTED_IN → "Web Development" (level: 6)
        133 +  
        134 +      - Charlie (verified, reputation: 1,450)
        135 +        ├─ FOLLOWS → Alice
        136 +        ├─ CREATED → "Advanced CSS tutorial" (Post)
        137 +        ├─ INTERESTED_IN → "Web Development" (level: 10)
        138 +        └─ EARNED → "Verified Expert" badge
        139 +  
        140 +      Layout: Force-directed with users forming a central cluster, content and topics 
            + radiating outward
        141 +  
        142 +      Interactive features:
        143 +      - Hover over user node: Show full profile summary (username, reputation, badges, 
            + join date)
        144 +      - Click user node: Highlight all posts created by that user and all users they 
            + follow
        145 +      - Double-click user: Show expanded network (followers of followers)
        146 +      - Hover over edge: Show relationship details (follow date, interaction frequency)
        147 +      - Click badge: Show all users who have earned that badge
        148 +      - Filter controls: Show/hide different relationship types
        149 +  
        150 +      Visual styling:
        151 +      - User node size based on reputation score (larger = higher reputation)
        152 +      - Verified users have gold border
        153 +      - Edge thickness based on interaction frequency
        154 +      - Color saturation indicates activity level (brighter = more active)
        155 +  
        156 +      Legend:
        157 +      - Node shapes: Circle (User), Square (Post), Triangle (Topic), Star (Badge)
        158 +      - Edge styles: Solid (action), Dashed (preference), Dotted (achievement)
        159 +      - Border colors: Gold (verified), Gray (regular)
        160 +  
        161 +      Implementation: vis-network JavaScript library
        162 +      Canvas size: 900x700px with zoom and pan controls
        163 +  </details>
        164 +  
        165 +  One key insight: reputation isn't stored in a single property—it emerges from the graph
            +  structure. A user's reputation might be calculated from how many followers they have, 
            + how many of their posts get liked, how many verified users follow them, and how long 
            + their account has existed. This is where graphs shine: they make these 
            + relationship-based calculations fast and natural.
        166 +  
        167 +  ## Friend Graphs: The Foundation of Social Connections
        168 +  
        169 +  The simplest social network pattern is the friend graph: nodes representing people, 
            + connected by "friend" relationships. This is how Facebook started—just college students 
            + and their friendships. But even this seemingly simple pattern has interesting complexity
            +  when you look closely.
        170 +  
        171 +  In most friendship systems, the relationship is mutual (symmetric): if Alice is friends
            +  with Bob, then Bob is friends with Alice. This differs from "following" relationships, 
            + which we'll explore next. The FRIENDS_WITH relationship is undirected, meaning it works 
            + both ways automatically.
        172 +  
        173 +  Creating a friend connection in a graph database is remarkably simple compared to the 
            + relational database equivalent. Instead of inserting a row into a "friendships" junction
            +  table with two foreign keys, you simply create an edge between two user nodes. Queries 
            + like "show me Alice's friends" or "how many mutual friends do Alice and Bob have?" 
            + become one-line graph traversals instead of multi-table joins.
        174 +  
        175 +  Here are some common friend graph queries and why they matter:
        176 +  
        177 +  - **Direct friends**: `MATCH (user)-[:FRIENDS_WITH]-(friend)` - The foundation of any 
            + social experience
        178 +  - **Friends of friends**: `MATCH (user)-[:FRIENDS_WITH*2]-(fof)` - Potential new 
            + connections and recommendations
        179 +  - **Mutual friends**: `MATCH (user1)-[:FRIENDS_WITH]-(mutual)-[:FRIENDS_WITH]-(user2)` 
            + - Social proof for new connections
        180 +  - **Friend groups**: `MATCH 
            + (user)-[:FRIENDS_WITH]-(friend)-[:FRIENDS_WITH]-(friendOfFriend)` - Discovering 
            + communities
        181 +  
        182 +  <details>
        183 +      <summary>Friend Recommendation MicroSim</summary>
        184 +      Type: microsim
        185 +  
        186 +      Learning objective: Demonstrate how friend-of-friend recommendations work in social
            +  networks and how different algorithms can prioritize recommendations
        187 +  
        188 +      Canvas layout (1000x700px):
        189 +      - Left side (700x700): Network visualization showing user nodes and connections
        190 +      - Right side (300x700): Control panel and recommendation results
        191 +  
        192 +      Visual elements in network view:
        193 +      - Current user (you) shown as large blue circle in center
        194 +      - Direct friends shown as medium green circles
        195 +      - Friends-of-friends shown as smaller orange circles
        196 +      - Strangers (not connected) shown as tiny gray circles
        197 +      - Edges between nodes shown as thin gray lines
        198 +      - When recommendation is selected, highlight path from you → friend → recommended 
            + person in yellow
        199 +  
        200 +      Interactive controls:
        201 +      - Button: "Generate Network" (creates random social graph with 40-60 nodes)
        202 +      - Slider: "Your friend count" (5-20 friends, default: 10)
        203 +      - Dropdown: "Recommendation algorithm"
        204 +        * Mutual Friends Count (default)
        205 +        * Common Interests
        206 +        * Network Centrality
        207 +        * Activity Level
        208 +      - Button: "Find Recommendations"
        209 +      - Display panel: Top 5 friend recommendations with reasons
        210 +  
        211 +      Network generation parameters:
        212 +      - Total nodes: 50 (1 you + 49 others)
        213 +      - Your direct friends: controlled by slider
        214 +      - Average friends per person: 8-12 (random)
        215 +      - Each person has 2-5 random interests from pool (Sports, Music, Tech, Art, Travel,
            +  Food, Gaming, Reading)
        216 +      - Activity level: random 1-10 per person
        217 +  
        218 +      Recommendation algorithms:
        219 +      1. Mutual Friends Count: Ranks friends-of-friends by number of mutual connections
        220 +         - Formula: COUNT(mutual_friends)
        221 +         - Reasoning: "You have 4 mutual friends with this person"
        222 +  
        223 +      2. Common Interests: Ranks by shared interest tags
        224 +         - Formula: COUNT(shared_interests) / TOTAL(your_interests)
        225 +         - Reasoning: "You both like Tech, Gaming, and Music"
        226 +  
        227 +      3. Network Centrality: Recommends well-connected people
        228 +         - Formula: COUNT(their_total_friends) - penalize if already connected
        229 +         - Reasoning: "This person knows a lot of people (18 friends)"
        230 +  
        231 +      4. Activity Level: Recommends active users
        232 +         - Formula: activity_score * mutual_connection_bonus
        233 +         - Reasoning: "Very active user (activity: 9/10) with 2 mutual friends"
        234 +  
        235 +      Behavior:
        236 +      - On "Generate Network": Create random graph, position nodes using force-directed 
            + layout
        237 +      - On "Find Recommendations": Run selected algorithm, display top 5 results
        238 +      - Hover over recommended person: Highlight all paths from you to them through 
            + friends
        239 +      - Click recommended person: Show detailed profile (friend count, interests, 
            + activity level, mutual friends list)
        240 +      - Animation: When showing recommendation, animate yellow highlight along the 
            + connection path
        241 +  
        242 +      Visual feedback:
        243 +      - Recommendation results show as cards with: name, reason, mutual friends count, 
            + shared interests, connection strength bar
        244 +      - Color code connection strength: Green (strong), Yellow (medium), Orange (weak)
        245 +  
        246 +      Educational value:
        247 +      - Students see different algorithms produce different recommendations
        248 +      - Visualizes the "friends of friends" concept
        249 +      - Shows why mutual friends is a strong social signal
        250 +      - Demonstrates trade-offs in recommendation strategies
        251 +  
        252 +      Implementation: p5.js with force-directed graph layout (or use simple geometric 
            + positioning)
        253 +      Default state: Start with network already generated so students can immediately 
            + explore
        254 +  </details>
        255 +  
        256 +  The friend graph becomes more interesting when we calculate metrics like clustering 
            + coefficient (how many of your friends are friends with each other) or identify 
            + tightly-knit groups (cliques). These patterns help social networks suggest new friends, 
            + detect spam accounts (real people have clustered friend networks, bots have random 
            + connections), and organize content (show posts from friend groups differently).
        257 +  
        258 +  ## Follower Networks: When Relationships Aren't Symmetric
        259 +  
        260 +  While friend relationships are mutual, many social networks use asymmetric follower 
            + relationships instead. On X (Twitter), Instagram, or TikTok, you can follow someone 
            + without them following you back. This creates a directed graph where edges have 
            + direction and meaning.
        261 +  
        262 +  The FOLLOWS relationship is fundamentally different from FRIENDS_WITH. When Alice 
            + follows Bob, she sees Bob's posts, but Bob doesn't necessarily see Alice's posts unless 
            + he follows her back. This asymmetry enables influencer dynamics, fan relationships, and 
            + information propagation patterns that couldn't exist in symmetric friend networks.
        263 +  
        264 +  Directed graphs enable questions that have no meaning in undirected graphs:
        265 +  
        266 +  - **Followers**: Who follows me? `MATCH (follower)-[:FOLLOWS]->(me)`
        267 +  - **Following**: Who do I follow? `MATCH (me)-[:FOLLOWS]->(following)`
        268 +  - **Mutual follows**: Who do I follow who also follows me back? (These are your 
            + "mutuals")
        269 +  - **Follow ratio**: Following count / Follower count (a metric some use to judge 
            + account quality)
        270 +  - **Reach**: How many people could potentially see my post? (followers + their 
            + followers + ...)
        271 +  
        272 +  <details>
        273 +      <summary>Follower Network Visualization Diagram</summary>
        274 +      Type: diagram
        275 +  
        276 +      Purpose: Illustrate the difference between symmetric friendships and asymmetric 
            + follower relationships
        277 +  
        278 +      Layout: Two side-by-side network diagrams for comparison
        279 +  
        280 +      LEFT SIDE: "Symmetric Friend Network (Facebook-style)"
        281 +      - 5 user nodes arranged in a circle: Alice, Bob, Carol, Dave, Eve
        282 +      - Undirected edges (lines without arrows) between nodes:
        283 +        * Alice ←→ Bob
        284 +        * Alice ←→ Carol
        285 +        * Bob ←→ Dave
        286 +        * Carol ←→ Dave
        287 +        * Dave ←→ Eve
        288 +      - All edges are same thickness, colored blue
        289 +      - Label: "All friendships are mutual"
        290 +      - Annotation: "If Alice is friends with Bob, Bob is automatically friends with 
            + Alice"
        291 +  
        292 +      RIGHT SIDE: "Asymmetric Follower Network (Twitter/Instagram-style)"
        293 +      - Same 5 user nodes: Alice, Bob, Carol, Dave, Eve
        294 +      - Directed edges (arrows) showing follow relationships:
        295 +        * Alice → Bob (Alice follows Bob)
        296 +        * Bob → Alice (Bob follows Alice) [these two create a mutual]
        297 +        * Alice → Carol (Alice follows Carol)
        298 +        * Carol → Bob (Carol follows Bob, but Bob doesn't follow back)
        299 +        * Dave → Bob (Dave follows Bob)
        300 +        * Dave → Eve (Dave follows Eve)
        301 +        * Eve → Bob (Eve follows Bob)
        302 +        * Bob → Carol (Bob follows Carol)
        303 +      - Color coding for edges:
        304 +        * Green thick arrows: Mutual follows (bidirectional)
        305 +        * Gray thin arrows: One-way follows
        306 +      - Label: "Follows can be one-directional"
        307 +      - Annotation: "Bob has 4 followers (Alice, Carol, Dave, Eve) but only follows 2 
            + people back (Alice, Carol)"
        308 +  
        309 +      Key insights callout (bottom):
        310 +      - "In follower networks, you can have INFLUENCERS (many followers, few following)"
        311 +      - "Mutual follows indicate stronger relationships"
        312 +      - "One-way follows create information hierarchies"
        313 +  
        314 +      Visual style: Clean network diagram with circular nodes labeled with names
        315 +      Node size: All equal size
        316 +      Color scheme: Blue for left diagram (friendship), Green/Gray for right diagram 
            + (followers)
        317 +      Include legend explaining arrow colors on right side
        318 +  
        319 +      Implementation: SVG diagram or simple illustration tool
        320 +  </details>
        321 +  
        322 +  The follower model creates interesting dynamics. Users with many followers but few 
            + following are influencers. Users with roughly equal followers and following are regular 
            + community participants. Accounts that follow thousands but have few followers are often 
            + spam or growth-hacking bots. These patterns would be invisible in a symmetric friend 
            + model.
        323 +  
        324 +  Follower networks also enable information cascades: when an influencer posts content, 
            + it can reach thousands directly, then spread further as followers share with their 
            + followers. Graph databases can model these propagation patterns and even predict which 
            + content is likely to go viral based on who shares it first.
        325 +  
        326 +  ## Activity Streams: Adding Time to the Social Graph
        327 +  
        328 +  Social networks aren't static—they're constantly flowing with new content. Activity 
            + streams capture this temporal dimension by tracking who posts what, when. Every tweet, 
            + Instagram photo, Facebook status, Reddit comment, or product review is a node in the 
            + graph, connected to its creator and timestamp.
        329 +  
        330 +  In graph databases, activity stream nodes typically have a CREATED_BY edge pointing to 
            + the user who created them, and often a POSTED_IN or TAGGED_WITH edge connecting them to 
            + topics, groups, or categories. The timestamp property on the post node enables 
            + time-based queries: "show me posts from the last hour" or "what were the trending topics
            +  last Tuesday?"
        331 +  
        332 +  The activity stream pattern appears everywhere:
        333 +  
        334 +  - **Social media posts**: Twitter tweets, Facebook updates, Instagram photos
        335 +  - **Reviews and ratings**: Amazon product reviews, Yelp restaurant reviews, App Store 
            + ratings
        336 +  - **Comments and discussions**: Reddit comments, YouTube video comments, blog post 
            + comments
        337 +  - **Work activity**: GitHub commits, Jira ticket updates, Slack messages
        338 +  - **Event logs**: User logins, page views, button clicks
        339 +  
        340 +  What makes activity streams interesting in graph databases is how they connect to other
            +  entities. A post isn't just created by a user—it might mention other users, belong to a
            +  topic, include location data, link to external content, and receive reactions from 
            + other users. Each of these is a different relationship type in the graph.
        341 +  
        342 +  Here's a query pattern you'll use constantly: "Show me recent posts from people I 
            + follow, about topics I care about, sorted by relevance." In a relational database, this 
            + requires joining user tables, follower tables, post tables, topic tables, and user 
            + interest tables—five or more joins. In a graph database, it's a simple pattern match 
            + that follows edges from you to people you follow to their recent posts that connect to 
            + your interest topics.
        343 +  
        344 +  <details>
        345 +      <summary>Activity Stream Timeline Visualization</summary>
        346 +      Type: timeline
        347 +  
        348 +      Purpose: Show how activity streams work in a social network, with posts distributed
            +  over time and connected to creators, topics, and interactions
        349 +  
        350 +      Time period: Last 7 days (display by day)
        351 +      Orientation: Vertical timeline (top = most recent)
        352 +  
        353 +      Timeline items (sample data):
        354 +  
        355 +      Day 1 (Today):
        356 +      - 10:30 AM: Alice posted photo "Morning coffee ☕"
        357 +        * Tagged: Coffee, Photography
        358 +        * Reactions: 12 likes, 3 comments
        359 +        * Reach: 234 followers
        360 +  
        361 +      - 2:15 PM: Bob posted question "Best JavaScript frameworks in 2024?"
        362 +        * Tagged: Programming, Web Development
        363 +        * Reactions: 45 likes, 28 comments, 8 shares
        364 +        * Reach: 156 followers
        365 +  
        366 +      Day 2 (Yesterday):
        367 +      - 9:00 AM: Charlie posted tutorial "How to center a div (seriously)"
        368 +        * Tagged: CSS, Web Development, Humor
        369 +        * Reactions: 234 likes, 67 comments, 89 shares
        370 +        * Reach: 1,450 followers
        371 +        * Went viral: +2,340 indirect impressions
        372 +  
        373 +      - 4:30 PM: Alice commented on Charlie's tutorial
        374 +        * Comment: "The classic problem! Great explanation"
        375 +        * Reactions: 5 likes
        376 +  
        377 +      Day 3:
        378 +      - 1:00 PM: Dave posted code snippet "Python one-liner for sorting"
        379 +        * Tagged: Python, Programming Tips
        380 +        * Reactions: 34 likes, 12 comments
        381 +        * Reach: 567 followers
        382 +  
        383 +      Day 4:
        384 +      - 11:15 AM: Eve posted review "Amazing pizza at Luigi's! 🍕 5⭐"
        385 +        * Tagged: Food, Restaurant Reviews, New York
        386 +        * Reactions: 23 likes, 7 comments
        387 +        * Reach: 198 followers
        388 +  
        389 +      Day 5:
        390 +      - 3:45 PM: Bob shared Charlie's tutorial
        391 +        * Added comment: "This saved me hours of frustration!"
        392 +        * Reactions: 15 likes
        393 +        * Extended reach: +156 people
        394 +  
        395 +      Day 6:
        396 +      - 8:00 AM: Charlie posted poll "Which do you prefer: Tabs or Spaces?"
        397 +        * Tagged: Programming, Debates
        398 +        * Reactions: 456 votes, 89 comments, 34 shares
        399 +        * Reach: 1,450 followers
        400 +  
        401 +      Day 7:
        402 +      - 5:30 PM: Alice posted travel photo "Sunset in Santorini"
        403 +        * Tagged: Travel, Photography, Greece
        404 +        * Reactions: 89 likes, 12 comments
        405 +        * Reach: 234 followers
        406 +  
        407 +      Visual style:
        408 +      - Vertical timeline with date markers on left
        409 +      - Post cards showing: creator profile pic, content preview, tags, reaction counts
        410 +      - Color coding by content type:
        411 +        * Blue: Regular posts
        412 +        * Green: Questions
        413 +        * Purple: Tutorials/educational
        414 +        * Orange: Reviews
        415 +        * Pink: Shared content
        416 +      - Connection lines showing: Alice → Charlie (comment), Bob → Charlie (share)
        417 +  
        418 +      Interactive features:
        419 +      - Hover over post: Show full content and engagement metrics
        420 +      - Click post: Expand to show all comments and reactions with timestamps
        421 +      - Click user: Filter timeline to show only that user's activity
        422 +      - Click tag: Filter timeline to show posts with that tag
        423 +      - Slider at top: Adjust time window (last 24 hours, 7 days, 30 days)
        424 +      - Toggle: Show only posts from followed users vs. all posts
        425 +  
        426 +      Educational value:
        427 +      - Visualizes how content flows through time
        428 +      - Shows viral spread (Charlie's tutorial)
        429 +      - Demonstrates engagement patterns (comments, shares, likes)
        430 +      - Illustrates how shares extend reach
        431 +      - Shows clustering of topics (programming posts cluster together)
        432 +  
        433 +      Implementation: vis-timeline library with custom styling
        434 +      Canvas size: 1000x800px with scrollable content
        435 +      Default view: Shows last 7 days, scrollable to see older content
        436 +  </details>
        437 +  
        438 +  Activity streams also enable algorithmic ranking. Instead of showing posts in simple 
            + reverse-chronological order, modern social networks rank posts by predicted relevance 
            + using graph signals: Is the creator someone you interact with frequently? Do you engage 
            + with this topic often? Have your friends engaged with this post? These graph-based 
            + features feed machine learning models that personalize everyone's feed.
        439 +  
        440 +  ## Relationship Types: Not All Connections Are Equal
        441 +  
        442 +  Real social networks are messy and multi-dimensional. The relationship between you and 
            + your mom is different from your relationship with your boss, which is different from 
            + your relationship with your favorite YouTuber, which is different from your relationship
            +  with your ex. Graph databases shine here because they support multiple relationship 
            + types between the same two nodes.
        443 +  
        444 +  Instead of a single generic "connected to" relationship, graph databases let you model 
            + the actual nature of connections:
        445 +  
        446 +  - **Family relationships**: PARENT_OF, CHILD_OF, SIBLING_OF, MARRIED_TO
        447 +  - **Professional relationships**: WORKS_WITH, MANAGES, REPORTS_TO, COLLABORATES_WITH
        448 +  - **Social relationships**: FRIENDS_WITH, FOLLOWS, BLOCKS, MUTED
        449 +  - **Content relationships**: CREATED, COMMENTED_ON, LIKED, SHARED, BOOKMARKED
        450 +  - **Affiliation relationships**: MEMBER_OF, MODERATOR_OF, OWNS, SUBSCRIBES_TO
        451 +  
        452 +  The power of typed relationships is that you can query specific relationship patterns. 
            + "Show me people I work with who also share my interest in photography" is a query that 
            + combines professional and interest relationships. "Find experts on machine learning who 
            + are within 3 degrees of separation from me" traverses your network while filtering by 
            + expertise tags.
        453 +  
        454 +  Relationship types can also have properties that add even more nuance:
        455 +  
        456 +  | Relationship Type | Common Properties | Why They Matter |
        457 +  |-------------------|-------------------|-----------------|
        458 +  | FOLLOWS | followed_since, notification_setting, follow_reason | Track when connection
            +  started, how engaged user is |
        459 +  | WORKS_WITH | start_date, end_date, role, department | Distinguish current and past 
            + colleagues |
        460 +  | COMMENTED_ON | comment_text, timestamp, sentiment_score | Understand nature of 
            + engagement |
        461 +  | MEMBER_OF | joined_date, membership_level, participation_score | Identify active vs. 
            + inactive members |
        462 +  | TRUSTS | trust_level (1-10), endorsement_count | Model reputation networks |
        463 +  
        464 +  <details>
        465 +      <summary>Multi-Relationship Network Graph Model</summary>
        466 +      Type: graph-model
        467 +  
        468 +      Purpose: Demonstrate how the same people can have multiple different relationship 
            + types connecting them, creating a rich multi-dimensional social network
        469 +  
        470 +      Node types:
        471 +      1. Person (large circles with profile pictures/icons)
        472 +         - Properties: name, job_title, interests[], location
        473 +         - Example nodes:
        474 +           * "Sarah" (Software Engineer, interests: [coding, hiking, photography])
        475 +           * "Mike" (Product Manager, interests: [product design, running, cooking])
        476 +           * "Lisa" (UX Designer, interests: [design, photography, travel])
        477 +           * "James" (Data Scientist, interests: [ML, coding, gaming])
        478 +           * "Emma" (Marketing Lead, interests: [marketing, travel, food])
        479 +  
        480 +      2. Company (square nodes)
        481 +         - Properties: company_name, industry
        482 +         - Example: "TechCorp Inc." (Software)
        483 +  
        484 +      3. Interest Group (triangle nodes)
        485 +         - Properties: group_name, member_count
        486 +         - Examples: "Photography Club" (128 members), "Hiking Enthusiasts" (234 members)
        487 +  
        488 +      Edge types (color-coded):
        489 +      1. WORKS_WITH (solid blue arrows)
        490 +         - Properties: since_date, department, project
        491 +         - Examples:
        492 +           * Sarah WORKS_WITH Mike (since: 2022, dept: Product, project: "App Redesign")
        493 +           * Sarah WORKS_WITH James (since: 2023, dept: Engineering, project: "ML 
            + Features")
        494 +           * Mike WORKS_WITH Lisa (since: 2021, dept: Product)
        495 +           * Mike WORKS_WITH Emma (since: 2022, cross-dept collaboration)
        496 +  
        497 +      2. FRIENDS_WITH (solid green lines, undirected)
        498 +         - Properties: friends_since, friendship_strength (1-10)
        499 +         - Examples:
        500 +           * Sarah FRIENDS_WITH Lisa (since: 2020, strength: 9)
        501 +           * Mike FRIENDS_WITH Emma (since: 2019, strength: 8)
        502 +           * James FRIENDS_WITH Sarah (since: 2023, strength: 6)
        503 +  
        504 +      3. FOLLOWS (dashed purple arrows)
        505 +         - Properties: followed_since, notification_on (true/false)
        506 +         - Examples:
        507 +           * Lisa FOLLOWS Sarah (since: 2021, notifications: true)
        508 +           * Emma FOLLOWS Sarah (since: 2022, notifications: false)
        509 +           * James FOLLOWS Mike (since: 2023, notifications: true)
        510 +  
        511 +      4. SHARES_INTEREST (dotted orange lines)
        512 +         - Properties: common_interests[]
        513 +         - Examples:
        514 +           * Sarah SHARES_INTEREST Lisa [photography, travel]
        515 +           * Sarah SHARES_INTEREST James [coding]
        516 +           * Mike SHARES_INTEREST Emma [travel, food]
        517 +  
        518 +      5. MENTORS (thick gold arrows)
        519 +         - Properties: mentorship_since, focus_area
        520 +         - Examples:
        521 +           * Mike MENTORS Sarah (since: 2022, focus: "product thinking")
        522 +           * Sarah MENTORS James (since: 2023, focus: "software engineering")
        523 +  
        524 +      6. EMPLOYED_BY (gray arrows)
        525 +         - Properties: role, start_date
        526 +         - All five people EMPLOYED_BY "TechCorp Inc."
        527 +  
        528 +      7. MEMBER_OF (light blue arrows)
        529 +         - Properties: joined_date, participation_level
        530 +         - Examples:
        531 +           * Sarah MEMBER_OF "Photography Club" (joined: 2021, level: active)
        532 +           * Lisa MEMBER_OF "Photography Club" (joined: 2020, level: organizer)
        533 +           * Sarah MEMBER_OF "Hiking Enthusiasts" (joined: 2022, level: occasional)
        534 +  
        535 +      Sample complex query visualization:
        536 +      - When user clicks "Find mentors who share my interests":
        537 +        * Highlight Sarah (user)
        538 +        * Trace SHARES_INTEREST edges to find Lisa and James
        539 +        * Trace MENTORS edges to find potential mentors
        540 +        * Result: Mike mentors Sarah and shares interests indirectly through friendship
        541 +        * Show path: Sarah → FRIENDS_WITH → Lisa → SHARES_INTEREST (photography) → Sarah
        542 +                     Sarah → MENTORED_BY → Mike
        543 +  
        544 +      Layout: Force-directed with people nodes in center, company and groups on periphery
        545 +  
        546 +      Interactive features:
        547 +      - Hover over person: Show all their properties and relationships summary
        548 +      - Click person: Filter view to show only relationships involving that person
        549 +      - Hover over edge: Show relationship type and properties in tooltip
        550 +      - Click edge: Highlight all edges of that type in the graph
        551 +      - Filter panel:
        552 +        * Checkboxes to show/hide relationship types
        553 +        * "Show only professional" (WORKS_WITH, MENTORS, EMPLOYED_BY)
        554 +        * "Show only social" (FRIENDS_WITH, FOLLOWS, SHARES_INTEREST)
        555 +        * "Show only affiliations" (MEMBER_OF, EMPLOYED_BY)
        556 +      - Double-click person: Show expanded network (include their connections not 
            + visible)
        557 +      - Query builder: Allow user to construct graph patterns
        558 +        * Example: "Find people who WORKS_WITH me AND SHARES_INTEREST with me"
        559 +  
        560 +      Visual styling:
        561 +      - Person node size based on total number of connections
        562 +      - Edge thickness based on relationship strength/importance
        563 +      - Edge color: Blue (professional), Green (friendship), Purple (following), Orange 
            + (shared interest), Gold (mentorship), Gray (employment), Light blue (membership)
        564 +      - Animated highlight when hovering or selecting
        565 +      - Semi-transparent edges when filtered out
        566 +  
        567 +      Legend (always visible):
        568 +      - Relationship types with color coding
        569 +      - Node shapes (Circle: Person, Square: Company, Triangle: Group)
        570 +      - Edge styles (Solid: strong connection, Dashed: follow, Dotted: shared attribute)
        571 +  
        572 +      Educational value:
        573 +      - Shows same people connected in multiple ways
        574 +      - Demonstrates how different relationships serve different purposes
        575 +      - Illustrates multi-dimensional social graphs
        576 +      - Shows why graph databases excel at relationship-rich data
        577 +  
        578 +      Implementation: vis-network JavaScript library
        579 +      Canvas size: 1000x800px with zoom, pan, and filter controls
        580 +      Default state: All relationships visible, force-directed layout stabilized
        581 +  </details>
        582 +  
        583 +  The multi-relationship approach also solves privacy problems elegantly. You might want 
            + to share vacation photos with friends but not coworkers. In a graph database, you can 
            + traverse FRIENDS_WITH relationships but not WORKS_WITH relationships when deciding who 
            + sees personal posts. LinkedIn leverages this: your work history is visible to 
            + professional connections (WORKS_WITH) but maybe not to everyone who follows you.
        584 +  
        585 +  ## Influence Graphs: Measuring Who Matters
        586 +  
        587 +  Not all users in a social network have equal impact. Some people have thousands of 
            + followers, high engagement rates, and content that gets shared widely. Others are casual
            +  users who rarely post. Influence graphs capture these dynamics by adding weight to 
            + connections and calculating centrality metrics.
        588 +  
        589 +  Influence can be measured in various ways:
        590 +  
        591 +  - **Follower count**: Raw number of people who see your content (reach)
        592 +  - **Engagement rate**: Percentage of followers who like, comment, or share (quality vs.
            +  quantity)
        593 +  - **Share cascades**: How often your content gets re-shared by others (virality)
        594 +  - **Network position**: How central you are in the social graph (betweenness 
            + centrality)
        595 +  - **PageRank**: The algorithm Google uses to rank web pages, adapted for social 
            + networks
        596 +  
        597 +  PageRank is particularly interesting for social networks because it doesn't just count 
            + followers—it weights followers by their own importance. Having 100 followers who are 
            + themselves influencers is more valuable than having 1,000 followers who are inactive 
            + accounts. PageRank iteratively calculates importance by following the graph structure.
        598 +  
        599 +  Graph databases can calculate influence metrics efficiently because they're optimized 
            + for traversing relationships. Finding someone's followers is a one-hop traversal. 
            + Finding followers-of-followers is a two-hop traversal. Calculating PageRank requires 
            + iterating over the entire graph multiple times, which graph databases handle well.
        600 +  
        601 +  Influence graphs appear in unexpected places:
        602 +  
        603 +  - **Academic citations**: Papers with many citations from highly-cited papers are more 
            + important
        604 +  - **Code repositories**: GitHub repos with stars from active developers rank higher
        605 +  - **Review platforms**: Reviews from verified, high-reputation reviewers carry more 
            + weight
        606 +  - **Answer forums**: Stack Overflow karma reflects your influence in the developer 
            + community
        607 +  
        608 +  <details>
        609 +      <summary>Influence Propagation MicroSim</summary>
        610 +      Type: microsim
        611 +  
        612 +      Learning objective: Visualize how influence spreads through a social network when 
            + an influencer posts content, and compare different propagation patterns
        613 +  
        614 +      Canvas layout (1200x800px):
        615 +      - Left side (850x800): Network visualization showing users and influence 
            + propagation
        616 +      - Right side (350x800): Control panel, metrics dashboard, and propagation 
            + statistics
        617 +  
        618 +      Visual elements in network view:
        619 +      - User nodes sized by follower count (larger = more followers)
        620 +      - Node colors indicate influence level:
        621 +        * Red (large): Influencers (1000+ followers)
        622 +        * Orange (medium): Mid-tier (100-999 followers)
        623 +        * Yellow (small): Regular users (10-99 followers)
        624 +        * Gray (tiny): Casual users (<10 followers)
        625 +      - Edges: FOLLOWS relationships shown as light gray arrows
        626 +      - When propagation runs: Nodes light up as content reaches them
        627 +      - Pulse animation shows content spreading through network
        628 +  
        629 +      Interactive controls:
        630 +      - Dropdown: "Select initial poster"
        631 +        * Random casual user
        632 +        * Random regular user
        633 +        * Random mid-tier user
        634 +        * Random influencer
        635 +        * [Specific user selection]
        636 +      - Slider: "Content quality" (1-10, affects share probability)
        637 +        * Low quality (1-3): 5% share rate
        638 +        * Medium quality (4-7): 15% share rate
        639 +        * High quality (8-10): 30% share rate
        640 +      - Slider: "Simulation speed" (50-2000ms per step)
        641 +      - Button: "Start Propagation"
        642 +      - Button: "Reset Network"
        643 +      - Button: "Generate New Network"
        644 +      - Checkbox: "Show engagement details"
        645 +      - Checkbox: "Highlight influencer paths"
        646 +  
        647 +      Network generation:
        648 +      - Total users: 100
        649 +      - Influencers: 3 (1000-5000 followers each)
        650 +      - Mid-tier: 15 (100-500 followers each)
        651 +      - Regular users: 32 (10-99 followers each)
        652 +      - Casual users: 50 (<10 followers each)
        653 +      - Follow pattern: Preferential attachment (popular users get more followers)
        654 +      - Influencers have higher engagement multiplier (2x share rate)
        655 +  
        656 +      Propagation algorithm:
        657 +      1. Initial poster creates content at time T=0
        658 +      2. All followers see content (immediate reach)
        659 +      3. Each follower decides whether to share based on:
        660 +         - Content quality (affects base share probability)
        661 +         - Their engagement level (random personality factor)
        662 +         - Whether they're an influencer (2x share rate)
        663 +      4. If they share, their followers see it (T=1, T=2, etc.)
        664 +      5. Track: unique reach, total impressions, shares, propagation depth
        665 +  
        666 +      Metrics dashboard (right panel):
        667 +      - Initial reach: [number] (direct followers)
        668 +      - Current total reach: [number] (unique users who saw it)
        669 +      - Total impressions: [number] (including duplicates)
        670 +      - Times shared: [number]
        671 +      - Propagation depth: [number] hops
        672 +      - Virality score: [calculated metric]
        673 +      - Engagement rate: [percentage]
        674 +      - Time elapsed: [seconds] in simulation
        675 +  
        676 +      Comparison table (shows after propagation completes):
        677 +      | Initial Poster Type | Avg Reach | Avg Shares | Avg Depth |
        678 +      |---------------------|-----------|------------|-----------|
        679 +      | Casual User         | 45        | 3          | 2.1       |
        680 +      | Regular User        | 178       | 12         | 3.4       |
        681 +      | Mid-tier User       | 634       | 45         | 4.8       |
        682 +      | Influencer          | 2,890     | 234        | 6.2       |
        683 +  
        684 +      Behavior:
        685 +      - On "Start Propagation":
        686 +        * Selected user node pulses (creates content)
        687 +        * Follower nodes light up green (saw content)
        688 +        * Some followers pulse and share (become orange briefly)
        689 +        * Their followers light up green
        690 +        * Animation continues until no more shares occur
        691 +      - Hover over any node during propagation: Show when they saw content, whether they 
            + shared, why they shared/didn't share
        692 +      - Click node: Show their influence metrics (followers, engagement rate, shares 
            + given)
        693 +      - "Highlight influencer paths": Show in bright yellow any propagation path that 
            + went through an influencer
        694 +  
        695 +      Visual feedback:
        696 +      - Green glow: User saw content
        697 +      - Orange pulse: User shared content
        698 +      - Yellow highlight: Influencer-mediated propagation
        699 +      - Edge thickness increases when content flows through that connection
        700 +      - Counter in corner shows current reach and shares in real-time
        701 +  
        702 +      Educational value:
        703 +      - Demonstrates network effects and viral spread
        704 +      - Shows why influencers are valuable (reach multiplication)
        705 +      - Illustrates that content quality matters (affects share rate)
        706 +      - Reveals how some content fizzles out vs. goes viral
        707 +      - Shows random variation (same conditions = different outcomes sometimes)
        708 +      - Demonstrates exponential growth in well-connected networks
        709 +  
        710 +      Implementation: p5.js with custom propagation simulation
        711 +      Physics: Use force-directed layout for positioning (or static hierarchical layout)
        712 +      Default state: Network pre-generated, ready for user to select poster and start
        713 +      Animation: Smooth transitions, clear visual feedback for each propagation step
        714 +  </details>
        715 +  
        716 +  Influence graphs raise interesting ethical questions. Should platforms amplify 
            + already-influential users (making the rich richer), or should they boost emerging 
            + voices? Should influence be calculated transparently, or is it a proprietary algorithm? 
            + These aren't just technical questions—they shape how information flows through society.
        717 +  
        718 +  ## Sentiment Analysis: Understanding the Emotional Network
        719 +  
        720 +  Social networks aren't just about who connects to whom—they're about what people say 
            + and how others react. Sentiment analysis adds an emotional dimension to the social graph
            +  by analyzing whether posts, comments, and reviews express positive, negative, or 
            + neutral feelings.
        721 +  
        722 +  In a graph database, sentiment can be stored as a property on content nodes or 
            + relationship edges. A review node might have a `sentiment_score` property ranging from 
            + -1 (very negative) to +1 (very positive). A COMMENTED_ON relationship might have a 
            + `comment_sentiment` property indicating whether the comment was supportive, critical, or
            +  neutral.
        723 +  
        724 +  Why does sentiment matter in social graphs?
        725 +  
        726 +  - **Product reviews**: Aggregate sentiment helps buyers decide ("4.5 stars but recent 
            + reviews are negative? Something changed.")
        727 +  - **Brand monitoring**: Companies track sentiment about their products across social 
            + media
        728 +  - **Content moderation**: Negative sentiment clusters might indicate harassment or 
            + toxic behavior
        729 +  - **Political analysis**: Sentiment about candidates or policies reveals public opinion
        730 +  - **Customer support**: Negative sentiment triggers escalation to human agents
        731 +  
        732 +  Modern sentiment analysis uses Natural Language Processing (NLP) models that go beyond 
            + simple keyword matching. Instead of just looking for "good" or "bad" words, these models
            +  understand context, sarcasm, and subtle emotional cues. "This product is surprisingly 
            + decent" is mildly positive despite the word "surprisingly" often appearing in negative 
            + contexts.
        733 +  
        734 +  Here's how sentiment analysis integrates with graph databases:
        735 +  
        736 +  1. **Content creation**: User posts comment or review (node created)
        737 +  2. **Sentiment extraction**: NLP model analyzes text, assigns sentiment score
        738 +  3. **Property storage**: Score stored as property on content node
        739 +  4. **Aggregation queries**: Calculate average sentiment for products, topics, users
        740 +  5. **Trend detection**: Track sentiment changes over time ("product rating dropping")
        741 +  6. **Network effects**: Positive content from influencers spreads more than negative 
            + content
        742 +  
        743 +  <details>
        744 +      <summary>Sentiment Analysis Flow Workflow Diagram</summary>
        745 +      Type: workflow
        746 +  
        747 +      Purpose: Show how sentiment analysis integrates into a social network content 
            + pipeline, from user posting to moderation actions
        748 +  
        749 +      Visual style: Flowchart with process rectangles, decision diamonds, and data stores
        750 +  
        751 +      Steps:
        752 +  
        753 +      1. Start: "User Submits Post/Comment/Review"
        754 +         Hover text: "User types content and clicks submit button"
        755 +         Shape: Rounded rectangle (start/end)
        756 +         Color: Green
        757 +  
        758 +      2. Process: "Store Content Node in Graph"
        759 +         Hover text: "Create node with properties: content_text, timestamp, author_id, 
            + content_type"
        760 +         Shape: Rectangle
        761 +         Color: Light blue
        762 +         Details: Node created with initial properties, relationship created: User 
            + -[:CREATED]-> Content
        763 +  
        764 +      3. Process: "Send Text to NLP Sentiment Model"
        765 +         Hover text: "Call external API or local model (e.g., VADER, TextBlob, or 
            + transformer-based model)"
        766 +         Shape: Rectangle
        767 +         Color: Light blue
        768 +         Details: Text preprocessing: remove URLs, mentions, hashtags; Tokenization and 
            + embedding
        769 +  
        770 +      4. Process: "Calculate Sentiment Scores"
        771 +         Hover text: "Model returns: overall score (-1 to +1), confidence level, emotion 
            + tags (joy, anger, sadness, etc.)"
        772 +         Shape: Rectangle
        773 +         Color: Light blue
        774 +         Details: Returns JSON: {sentiment: 0.65, confidence: 0.89, emotions: ["joy", 
            + "excitement"]}
        775 +  
        776 +      5. Process: "Update Content Node with Sentiment Properties"
        777 +         Hover text: "Add properties: sentiment_score, sentiment_confidence, 
            + emotion_tags[], analyzed_timestamp"
        778 +         Shape: Rectangle
        779 +         Color: Light blue
        780 +         Details: Graph updated with sentiment metadata
        781 +  
        782 +      6. Decision: "Sentiment Highly Negative?"
        783 +         Hover text: "Check if sentiment_score < -0.7 AND confidence > 0.8"
        784 +         Shape: Diamond
        785 +         Color: Yellow
        786 +         Details: Threshold for flagging potentially harmful content
        787 +  
        788 +      7a. Process: "Flag for Moderation" (if YES to negative sentiment)
        789 +          Hover text: "Create FLAGGED_FOR_REVIEW relationship to ModQueue node, assign 
            + priority based on severity"
        790 +          Shape: Rectangle
        791 +          Color: Orange
        792 +          Details: Human moderator will review within 15 minutes
        793 +  
        794 +      7b. Process: "Publish Content" (if NO to negative sentiment)
        795 +          Hover text: "Make content visible to followers/network, trigger notification 
            + system"
        796 +          Shape: Rectangle
        797 +          Color: Green
        798 +  
        799 +      8. Process: "Update Aggregate Sentiment Metrics"
        800 +         Hover text: "If content is about a product/topic, update rolling average 
            + sentiment for that entity"
        801 +         Shape: Rectangle
        802 +         Color: Light blue
        803 +         Details: Product node gets updated: avg_sentiment, recent_sentiment_trend, 
            + total_reviews
        804 +  
        805 +      9. Process: "Check for Sentiment Trends"
        806 +         Hover text: "Detect sudden sentiment changes (e.g., product ratings dropping 
            + rapidly)"
        807 +         Shape: Rectangle
        808 +         Color: Light blue
        809 +         Details: Compare last 24h average vs. last 30d average
        810 +  
        811 +      10. Decision: "Significant Negative Trend?"
        812 +          Hover text: "Has average sentiment dropped >0.3 points in 24 hours?"
        813 +          Shape: Diamond
        814 +          Color: Yellow
        815 +  
        816 +      11a. Process: "Alert Brand/Product Team" (if YES to trend)
        817 +           Hover text: "Send notification to product owners about sentiment drop"
        818 +           Shape: Rectangle
        819 +           Color: Red
        820 +           Details: Dashboard alert created, email sent to stakeholders
        821 +  
        822 +      11b. Process: "Standard Analytics Update" (if NO to trend)
        823 +           Hover text: "Update dashboards and reports with latest sentiment data"
        824 +           Shape: Rectangle
        825 +           Color: Light blue
        826 +  
        827 +      12. End: "Content Published & Analyzed"
        828 +          Hover text: "Process complete, content live in network with sentiment metadata"
        829 +          Shape: Rounded rectangle (start/end)
        830 +          Color: Green
        831 +  
        832 +      Color coding:
        833 +      - Green: Start/end points and successful outcomes
        834 +      - Light blue: Standard processing steps
        835 +      - Yellow: Decision points
        836 +      - Orange: Warning/flagging actions
        837 +      - Red: Alert/escalation actions
        838 +  
        839 +      Swimlanes (horizontal lanes):
        840 +      - User Layer (top): User interaction
        841 +      - Application Layer: Content storage and processing
        842 +      - Analysis Layer: NLP and sentiment calculation
        843 +      - Moderation Layer: Flagging and review
        844 +      - Analytics Layer (bottom): Trend detection and reporting
        845 +  
        846 +      Annotations:
        847 +      - Arrow from "Calculate Sentiment Scores" pointing to external box: "External NLP 
            + API (OpenAI, Google Cloud NLP, or local model)"
        848 +      - Arrow from "Update Aggregate Metrics" pointing to data store icon: "Product/Topic
            +  nodes in graph database"
        849 +      - Dashed line around moderation steps (7a, 11a) with label: "Automated moderation 
            + pipeline"
        850 +  
        851 +      Implementation: Mermaid.js flowchart or Lucidchart-style diagram
        852 +      Size: 1000x1400px to accommodate vertical flow and multiple decision branches
        853 +  </details>
        854 +  
        855 +  Sentiment analysis becomes even more powerful when combined with graph structure. A 
            + product with mostly positive reviews but negative reviews from high-reputation reviewers
            +  might have quality issues that casual reviewers didn't notice. A political post with 
            + positive sentiment from your filter bubble but negative sentiment from outside your 
            + network might indicate polarization. Graph databases make these cross-dimensional 
            + analyses possible.
        856 +  
        857 +  ## Natural Language Processing: Making Sense of Unstructured Text
        858 +  
        859 +  Sentiment is just one application of Natural Language Processing (NLP) in social 
            + networks. Modern NLP extracts structured information from unstructured text, turning 
            + messy human language into graph-friendly data. This bridges the gap between how humans 
            + communicate (long-form text) and how computers organize information (structured graphs).
        860 +  
        861 +  Common NLP tasks in social networks include:
        862 +  
        863 +  - **Entity extraction**: Identifying people, places, organizations, products mentioned 
            + in text
        864 +  - **Topic modeling**: Determining what subjects a post discusses (sports, politics, 
            + technology, etc.)
        865 +  - **Hashtag parsing**: Extracting and linking to topic nodes
        866 +  - **Mention detection**: Finding @mentions and creating relationships between users
        867 +  - **Link extraction**: Identifying URLs and creating relationships to external content
        868 +  - **Spam detection**: Recognizing patterns in text that indicate spam or bot behavior
        869 +  - **Content categorization**: Auto-tagging posts for better discovery and 
            + recommendations
        870 +  
        871 +  Here's a powerful pattern: extract entities from text and create them as nodes in the 
            + graph. If someone posts "Just visited the Louvre in Paris, amazing experience!", NLP can
            +  extract:
        872 +  - Location entity: "Louvre" (museum)
        873 +  - Location entity: "Paris" (city)
        874 +  - Sentiment: Positive
        875 +  - Topic: Travel, Art
        876 +  
        877 +  These become relationships in the graph: User -[:VISITED]-> Louvre -[:LOCATED_IN]-> 
            + Paris, with properties like timestamp and sentiment. Now you can query "show me people 
            + in my network who visited museums in Europe with positive sentiment"—a question that 
            + would be impossible without NLP extracting structure from unstructured text.
        878 +  
        879 +  Modern social networks use NLP constantly:
        880 +  
        881 +  | Platform | NLP Application | Graph Impact |
        882 +  |----------|----------------|--------------|
        883 +  | Twitter/X | Trending topics extraction | Creates TRENDING_NOW nodes, links to topic 
            + nodes |
        884 +  | LinkedIn | Skills extraction from profiles | Creates SKILLED_IN relationships to 
            + skill nodes |
        885 +  | YouTube | Auto-generated video tags | Creates TAGGED_WITH relationships to topic 
            + nodes |
        886 +  | Facebook | Auto-tagging friends in photos | Creates TAGGED_IN relationships to user 
            + nodes |
        887 +  | Reddit | Subreddit recommendation | Analyzes post content to suggest related 
            + communities |
        888 +  | Instagram | Location tags and hashtags | Creates POSTED_FROM and TAGGED relationships
            +  |
        889 +  
        890 +  <details>
        891 +      <summary>NLP Entity Extraction and Graph Building Diagram</summary>
        892 +      Type: diagram
        893 +  
        894 +      Purpose: Illustrate how NLP processes unstructured text from social media posts and
            +  extracts structured entities to add to the graph database
        895 +  
        896 +      Layout: Left-to-right pipeline showing transformation from raw text to graph 
            + structure
        897 +  
        898 +      STAGE 1 (Left): Raw User Post
        899 +      - Visual: Speech bubble or post card containing sample text:
        900 +        "Just had an amazing lunch at @JoePizza in Brooklyn! Best margherita pizza 🍕 in 
            + NYC. Highly recommend! #foodie #nycfood #pizza"
        901 +      - Label: "Raw Unstructured Text Input"
        902 +      - Color: Light gray background
        903 +  
        904 +      STAGE 2 (Center-left): NLP Processing
        905 +      - Visual: Flowchart box labeled "NLP Pipeline" with substeps:
        906 +        1. Tokenization: Break into words/tokens
        907 +        2. Named Entity Recognition (NER): Identify entities
        908 +        3. Sentiment Analysis: Determine emotional tone
        909 +        4. Hashtag/Mention Extraction: Find tags and references
        910 +        5. Category Classification: Determine topics
        911 +      - Color: Blue background
        912 +      - Arrows showing flow through each substep
        913 +  
        914 +      STAGE 3 (Center-right): Extracted Entities
        915 +      - Visual: List of structured data extracted:
        916 +        * Mentioned Business: "@JoePizza" → Entity: "Joe's Pizza" (Restaurant)
        917 +        * Location: "Brooklyn" → Entity: "Brooklyn, NY" (Place)
        918 +        * Location: "NYC" → Entity: "New York City" (City)
        919 +        * Product: "margherita pizza" → Entity: "Margherita Pizza" (Menu Item)
        920 +        * Sentiment: Positive (score: 0.92)
        921 +        * Topics: #foodie → "Food" topic
        922 +                 #nycfood → "NYC Food" topic
        923 +                 #pizza → "Pizza" topic
        924 +        * Recommendation: "Highly recommend" → Intent: RECOMMENDS
        925 +      - Color: Green background
        926 +      - Label: "Structured Entities & Metadata"
        927 +  
        928 +      STAGE 4 (Right): Graph Database Updates
        929 +      - Visual: Graph structure showing:
        930 +  
        931 +        Central node: User "Sarah"
        932 +  
        933 +        New relationships created:
        934 +        1. Sarah -[:POSTED]-> Post (content: "Just had amazing lunch...", timestamp: 
            + 2024-01-15, sentiment: 0.92)
        935 +        2. Post -[:MENTIONS]-> Restaurant "Joe's Pizza"
        936 +        3. Post -[:LOCATED_IN]-> Place "Brooklyn"
        937 +        4. Post -[:TAGGED_WITH]-> Topic "Food"
        938 +        5. Post -[:TAGGED_WITH]-> Topic "NYC Food"
        939 +        6. Post -[:TAGGED_WITH]-> Topic "Pizza"
        940 +        7. Sarah -[:RECOMMENDS]-> Restaurant "Joe's Pizza" (based_on_post: [post_id], 
            + sentiment: 0.92)
        941 +        8. Restaurant "Joe's Pizza" -[:LOCATED_IN]-> Place "Brooklyn"
        942 +        9. Brooklyn -[:PART_OF]-> City "New York City"
        943 +  
        944 +        New/updated nodes:
        945 +        - Restaurant node: "Joe's Pizza" (type: restaurant, cuisine: Italian, rating 
            + updates)
        946 +        - Place nodes: "Brooklyn", "New York City"
        947 +        - Topic nodes: "Food", "NYC Food", "Pizza"
        948 +        - Post node: (sentiment: 0.92, timestamp, content)
        949 +  
        950 +      - Color: Purple/pink background
        951 +      - Label: "Graph Database (Updated)"
        952 +      - Visual style: Network diagram with nodes and labeled edges
        953 +  
        954 +      CALLOUT BOX (Bottom):
        955 +      "Enabled Queries After Processing:"
        956 +      - "Find restaurants in Brooklyn recommended by people I follow"
        957 +      - "Show me posts about pizza with positive sentiment"
        958 +      - "Which NYC neighborhoods have the most food recommendations?"
        959 +      - "Find users who share my interest in Italian food"
        960 +      - "Alert Joe's Pizza to this positive mention"
        961 +  
        962 +      Visual style: Modern pipeline diagram with clear stages
        963 +      Color scheme: Gray → Blue → Green → Purple (showing progression)
        964 +      Include icons: Text icon, Brain icon (NLP), Database icon (graph)
        965 +      Arrows between stages: Bold, directional, labeled with data type
        966 +  
        967 +      Annotations:
        968 +      - Note on NLP stage: "Powered by models like spaCy, Stanford NER, or GPT"
        969 +      - Note on graph stage: "Automated relationship creation enables rich queries"
        970 +      - Highlight: "Same text → Multiple dimensions in graph"
        971 +  
        972 +      Implementation: Vector graphics (SVG) or diagramming tool
        973 +      Size: 1200x700px for clear horizontal flow
        974 +  </details>
        975 +  
        976 +  The combination of NLP and graphs creates powerful emergent properties. As more posts 
            + are analyzed, the graph learns patterns: certain hashtags cluster together, certain 
            + locations correlate with positive sentiment, certain users always mention the same 
            + topics. These patterns enable better recommendations, better search, and better content 
            + moderation—all because NLP transformed unstructured chaos into structured knowledge.
        977 +  
        978 +  ## Fake Account Detection: Fighting Bots with Graph Patterns
        979 +  
        980 +  Social networks face a constant battle against fake accounts: bots, spam accounts, 
            + impersonators, and coordinated inauthentic behavior. Traditional detection methods check
            +  individual account characteristics (new account, no profile photo, etc.), but 
            + graph-based detection is far more powerful because it analyzes relationship patterns.
        981 +  
        982 +  Real humans create organic social graphs with specific patterns:
        983 +  - Friends tend to cluster (your friends know each other)
        984 +  - Connections form gradually over time, not all at once
        985 +  - Activity patterns vary (some days active, some days quiet)
        986 +  - Content is diverse, not repetitive
        987 +  - Interactions are reciprocal (people reply to you, you reply to them)
        988 +  
        989 +  Fake accounts create different patterns:
        990 +  - Many connections made simultaneously (bulk following)
        991 +  - Connections are random, not clustered (follow anyone who follows back)
        992 +  - Identical or near-identical posts across multiple accounts (coordinated behavior)
        993 +  - One-way relationships (they follow thousands, few follow back)
        994 +  - Amplification networks (bots like and share each other's content)
        995 +  
        996 +  Graph databases excel at detecting these patterns because they can efficiently analyze 
            + network structure, not just node properties. Here are some graph-based detection 
            + signals:
        997 +  
        998 +  **Clustering coefficient**: Measures how interconnected a user's friends are. Real 
            + people: 0.3-0.7 (some friends know each other). Bots: often near 0 (random connections) 
            + or near 1 (tight bot network).
        999 +  
       1000 +  **Follow ratio**: Following/Followers ratio. Real people: usually 0.5-2.0. Bots: often 
            + >10 (follow thousands, get few followers back).
       1001 +  
       1002 +  **Account age vs. activity**: Real accounts gradually increase connections. Suspicious:
            +  brand new account with 1000 followers.
       1003 +  
       1004 +  **Reciprocity rate**: Percentage of mutual relationships. Real people: 40-70%. Bots: 
            + often <10% (one-way follows).
       1005 +  
       1006 +  **Content similarity**: Posting identical or near-identical content as other accounts. 
            + Strong signal of coordination.
       1007 +  
       1008 +  **Amplification network detection**: Graph analysis can find clusters of accounts that 
            + always like/share each other's content—a sign of coordinated inauthentic behavior.
       1009 +  
       1010 +  <details>
       1011 +      <summary>Fake Account Detection Pattern MicroSim</summary>
       1012 +      Type: microsim
       1013 +  
       1014 +      Learning objective: Visualize different network patterns created by real users vs. 
            + fake accounts, and let students explore detection algorithms
       1015 +  
       1016 +      Canvas layout (1200x700px):
       1017 +      - Left side (800x700): Network visualization showing users and connections
       1018 +      - Right side (400x700): Detection controls, metrics, and results panel
       1019 +  
       1020 +      Visual elements:
       1021 +      - User nodes colored by detection score:
       1022 +        * Dark green: Definitely real (score: 0.9-1.0)
       1023 +        * Light green: Probably real (score: 0.7-0.89)
       1024 +        * Yellow: Suspicious (score: 0.4-0.69)
       1025 +        * Orange: Likely fake (score: 0.2-0.39)
       1026 +        * Red: Almost certainly fake (score: 0.0-0.19)
       1027 +      - Node size based on follower count
       1028 +      - Edges show FOLLOWS relationships (gray arrows)
       1029 +      - When account selected, highlight its connections and show metrics
       1030 +  
       1031 +      Interactive controls:
       1032 +      - Button: "Generate Mixed Network" (creates network with ~70% real, ~30% fake 
            + accounts)
       1033 +      - Button: "Generate All Real Network" (comparison baseline)
       1034 +      - Button: "Generate Bot Network" (extreme case)
       1035 +      - Dropdown: "Detection Algorithm"
       1036 +        * Clustering Coefficient Analysis
       1037 +        * Follow Ratio Analysis
       1038 +        * Account Age vs. Activity
       1039 +        * Content Similarity Detection
       1040 +        * Combined Score (default)
       1041 +      - Button: "Run Detection"
       1042 +      - Slider: "Suspicion Threshold" (0.0-1.0, default: 0.5)
       1043 +        * Accounts below threshold flagged as suspicious
       1044 +      - Checkbox: "Show only flagged accounts"
       1045 +      - Checkbox: "Highlight bot networks"
       1046 +  
       1047 +      Network generation:
       1048 +  
       1049 +      Real accounts (70%):
       1050 +      - Friends-of-friends connection pattern (clustering)
       1051 +      - Account age: 180-1800 days (random distribution)
       1052 +      - Follow ratio: 0.5-2.0 (balanced following/followers)
       1053 +      - Follower count: 50-500 (log-normal distribution)
       1054 +      - Following count: Similar to follower count (±30%)
       1055 +      - Activity: Variable (10-100 posts, random intervals)
       1056 +      - Content: Unique text for each post
       1057 +      - Clustering coefficient: 0.3-0.7
       1058 +  
       1059 +      Fake accounts (30%):
       1060 +      - Random connection pattern OR tight cluster (bot networks)
       1061 +      - Account age: 1-60 days (recently created)
       1062 +      - Follow ratio: 5-50 (following >> followers)
       1063 +      - Follower count: 10-100 (low)
       1064 +      - Following count: 500-5000 (very high)
       1065 +      - Activity: High volume in short time (100 posts in 7 days)
       1066 +      - Content: Repetitive or copied from other accounts
       1067 +      - Clustering coefficient: <0.1 or >0.9 (extremes)
       1068 +  
       1069 +      Detection algorithms:
       1070 +  
       1071 +      1. Clustering Coefficient:
       1072 +         - Calculate for each user: (# of connections between their friends) / (# 
            + possible connections)
       1073 +         - Suspicion score = distance from normal range (0.3-0.7)
       1074 +         - Display: "Clustering: 0.05 (SUSPICIOUS - random connections)"
       1075 +  
       1076 +      2. Follow Ratio:
       1077 +         - Calculate: following_count / follower_count
       1078 +         - Suspicion score: penalize ratio >3 or <0.3
       1079 +         - Display: "Follow ratio: 12.5 (SUSPICIOUS - following many, few followers)"
       1080 +  
       1081 +      3. Account Age vs. Activity:
       1082 +         - Calculate: posts_per_day = total_posts / account_age_days
       1083 +         - Suspicion if: new account (<30 days) with high activity (>5 posts/day)
       1084 +         - Display: "7 days old, 89 posts (SUSPICIOUS - abnormal activity)"
       1085 +  
       1086 +      4. Content Similarity:
       1087 +         - Compare post content between accounts using simple text similarity
       1088 +         - Flag accounts with >70% similar content to other accounts
       1089 +         - Display: "83% content match with 4 other accounts (SUSPICIOUS - coordinated)"
       1090 +  
       1091 +      5. Combined Score:
       1092 +         - Weighted average of all metrics
       1093 +         - Weights: Clustering (25%), Follow Ratio (25%), Age/Activity (25%), Content 
            + (25%)
       1094 +         - Display: "Overall suspicion: 0.82 (LIKELY FAKE)"
       1095 +  
       1096 +      Metrics panel (shown when account selected):
       1097 +      - Account age: [X] days
       1098 +      - Followers: [X]
       1099 +      - Following: [X]
       1100 +      - Follow ratio: [X]
       1101 +      - Total posts: [X]
       1102 +      - Posts per day: [X]
       1103 +      - Clustering coefficient: [X]
       1104 +      - Content uniqueness: [X]%
       1105 +      - Suspicion score: [X]
       1106 +      - Classification: REAL / SUSPICIOUS / LIKELY FAKE
       1107 +  
       1108 +      Results panel (after running detection):
       1109 +      - Total accounts analyzed: [X]
       1110 +      - Flagged as suspicious: [X] ([X]%)
       1111 +      - True positives: [X] (correctly identified fakes)
       1112 +      - False positives: [X] (real accounts flagged incorrectly)
       1113 +      - Detection accuracy: [X]%
       1114 +      - Precision: [X]%
       1115 +      - Recall: [X]%
       1116 +  
       1117 +      Behavior:
       1118 +      - On "Generate Mixed Network": Create graph with real and fake patterns
       1119 +      - On "Run Detection": Calculate scores for all accounts, color nodes by score
       1120 +      - Hover over node: Show quick metrics tooltip
       1121 +      - Click node: Show detailed metrics panel
       1122 +      - "Show only flagged": Hide green nodes, show only yellow/orange/red
       1123 +      - "Highlight bot networks": If multiple fake accounts all follow each other, draw 
            + thick red border around that cluster
       1124 +  
       1125 +      Educational value:
       1126 +      - Shows visually how bot networks have different structure than real networks
       1127 +      - Demonstrates that no single metric catches all fakes (need combined approach)
       1128 +      - Illustrates false positives (some real accounts look suspicious)
       1129 +      - Shows how graph structure reveals patterns individual account properties miss
       1130 +      - Students can experiment with different thresholds and see precision/recall 
            + trade-offs
       1131 +  
       1132 +      Special feature: "Bot Network Visualization"
       1133 +      - When detected, draw red outline around clusters where accounts:
       1134 +        * All created within 7 days of each other
       1135 +        * All follow each other (>80% mutual follows within cluster)
       1136 +        * Post similar content (>70% similarity)
       1137 +        * Have similar follow patterns
       1138 +      - Label: "Coordinated inauthentic behavior detected"
       1139 +  
       1140 +      Implementation: p5.js with force-directed graph layout
       1141 +      Default state: Mixed network pre-generated, ready for detection to run
       1142 +      Animation: When running detection, show score calculation progress, then color 
            + nodes based on results
       1143 +  </details>
       1144 +  
       1145 +  Social networks combine multiple detection signals to calculate a "fake account 
            + probability" score. Accounts above a threshold get flagged for manual review or 
            + automatic restrictions. The beauty of graph-based detection is that it's harder to fake 
            + than individual account properties. Bots can add a profile photo and bio, but they can't
            +  easily create organic relationship patterns that evolve over years.
       1146 +  
       1147 +  This cat-and-mouse game continues: bot creators try to mimic real patterns, and 
            + detection systems adapt using machine learning on graph features. The next frontier is 
            + detecting AI-generated content that's grammatically perfect and topically diverse, 
            + making content-based detection harder. Graph structure remains a robust signal.
       1148 +  
       1149 +  ## From Social to Professional: Human Resources Modeling
       1150 +  
       1151 +  All the patterns we've explored—profiles, relationships, activity streams, influence, 
            + sentiment—apply beyond social media. Human Resources departments face remarkably similar
            +  challenges: tracking who knows whom, who has what skills, who influences whom, and how 
            + to assign tasks effectively. The graph patterns are identical, just with different 
            + labels.
       1152 +  
       1153 +  Instead of friends and followers, HR deals with:
       1154 +  - **Org chart relationships**: REPORTS_TO, MANAGES, WORKS_WITH
       1155 +  - **Skill networks**: SKILLED_IN, REQUIRES_SKILL, ENDORSED_BY
       1156 +  - **Project relationships**: ASSIGNED_TO, COLLABORATES_ON, OWNS
       1157 +  - **Expertise networks**: EXPERT_IN, LEARNING, MENTORS
       1158 +  
       1159 +  An organization is fundamentally a social network with formal structure added on top. 
            + The org chart is the official directed graph (employee REPORTS_TO manager), but the 
            + actual work network is far more complex and organic—people collaborate across 
            + departments, seek advice from unofficial mentors, and have expertise that doesn't match 
            + their job titles.
       1160 +  
       1161 +  Graph databases excel at modeling both the formal and informal organization 
            + simultaneously. You can query "find someone with Python skills in the marketing 
            + department within 2 degrees of separation from me" (combining skill network, org chart, 
            + and social network in one query). Try that with separate HR systems for org charts, 
            + skill databases, and project assignments!
       1162 +  
       1163 +  ## Org Chart Models: Beyond the Hierarchy
       1164 +  
       1165 +  Traditional org charts are trees: each employee has one manager, managers have one 
            + manager above them, up to the CEO at the root. But modern organizations are more 
            + complex. You might have a direct manager for performance reviews, a project lead for 
            + day-to-day work, and a mentor for career development. Graph databases handle this 
            + multi-dimensional reporting structure naturally.
       1166 +  
       1167 +  Here's what an org chart graph model includes:
       1168 +  
       1169 +  **Node types:**
       1170 +  - Employee (with properties: name, title, department, hire_date, employee_id)
       1171 +  - Department (with properties: name, cost_center, location)
       1172 +  - Team (with properties: team_name, project, start_date)
       1173 +  - Role (with properties: role_title, level, salary_band)
       1174 +  
       1175 +  **Relationship types:**
       1176 +  - REPORTS_TO: Direct management chain (official hierarchy)
       1177 +  - MANAGES: Inverse of REPORTS_TO, useful for manager-focused queries
       1178 +  - MEMBER_OF: Department or team membership
       1179 +  - COLLABORATES_WITH: Cross-functional working relationships
       1180 +  - MENTORS: Informal development relationships
       1181 +  - HAS_ROLE: Current role assignment
       1182 +  - PREVIOUSLY_HELD: Historical roles (career progression)
       1183 +  
       1184 +  <details>
       1185 +      <summary>Multi-Dimensional Org Chart Graph Model</summary>
       1186 +      Type: graph-model
       1187 +  
       1188 +      Purpose: Show how modern organizations have multiple overlapping hierarchies 
            + (management reporting, project teams, mentorship) that are naturally represented in 
            + graph databases
       1189 +  
       1190 +      Node types:
       1191 +  
       1192 +      1. Employee (medium blue circles with initials)
       1193 +         - Properties: name, employee_id, title, email, hire_date, location
       1194 +         - Example nodes:
       1195 +           * "Alice Chen" (VP Engineering, hire_date: 2018)
       1196 +           * "Bob Martinez" (Senior Engineer, hire_date: 2020)
       1197 +           * "Carol Johnson" (Engineering Manager, hire_date: 2019)
       1198 +           * "David Kim" (Junior Engineer, hire_date: 2023)
       1199 +           * "Eve Williams" (Product Manager, hire_date: 2021)
       1200 +           * "Frank Thompson" (CTO, hire_date: 2017)
       1201 +           * "Grace Lee" (HR Director, hire_date: 2019)
       1202 +  
       1203 +      2. Department (large purple squares)
       1204 +         - Properties: dept_name, budget, headcount
       1205 +         - Example nodes: "Engineering", "Product", "HR"
       1206 +  
       1207 +      3. Project (green hexagons)
       1208 +         - Properties: project_name, status, deadline
       1209 +         - Example nodes: "Mobile App Redesign", "API v2.0", "Q4 Infrastructure"
       1210 +  
       1211 +      4. Team (orange rounded rectangles)
       1212 +         - Properties: team_name, focus_area
       1213 +         - Example nodes: "Backend Team", "Frontend Team", "Platform Team"
       1214 +  
       1215 +      5. Skill (small yellow triangles)
       1216 +         - Properties: skill_name, category
       1217 +         - Example nodes: "Python", "Leadership", "System Design", "React"
       1218 +  
       1219 +      Edge types:
       1220 +  
       1221 +      1. REPORTS_TO (solid thick blue arrows, hierarchical)
       1222 +         - Properties: since_date, reporting_type (direct/dotted-line)
       1223 +         - Management hierarchy:
       1224 +           * Alice → Frank (VP Engineering → CTO)
       1225 +           * Carol → Alice (Eng Manager → VP Engineering)
       1226 +           * Bob → Carol (Senior Eng → Eng Manager)
       1227 +           * David → Carol (Junior Eng → Eng Manager)
       1228 +           * Eve → Alice (Product Manager → VP Engineering, dotted-line)
       1229 +           * Grace → Frank (HR Director → CTO)
       1230 +  
       1231 +      2. MEMBER_OF (solid purple arrows to departments)
       1232 +         - Properties: since_date, allocation_percentage
       1233 +         - Examples:
       1234 +           * Alice, Carol, Bob, David → Engineering (100%)
       1235 +           * Eve → Product (100%)
       1236 +           * Grace → HR (100%)
       1237 +           * Frank → Executive (100%)
       1238 +  
       1239 +      3. ASSIGNED_TO (dashed green arrows to projects)
       1240 +         - Properties: role_on_project, allocation_percentage, start_date
       1241 +         - Examples:
       1242 +           * Bob ASSIGNED_TO "API v2.0" (Tech Lead, 80%)
       1243 +           * David ASSIGNED_TO "API v2.0" (Developer, 100%)
       1244 +           * Eve ASSIGNED_TO "API v2.0" (Product Owner, 50%)
       1245 +           * Carol ASSIGNED_TO "Mobile App Redesign" (Engineering Lead, 40%)
       1246 +  
       1247 +      4. BELONGS_TO (solid orange arrows to teams)
       1248 +         - Properties: team_role, since_date
       1249 +         - Examples:
       1250 +           * Bob BELONGS_TO "Backend Team" (Senior Member)
       1251 +           * David BELONGS_TO "Backend Team" (Member)
       1252 +           * Carol BELONGS_TO "Backend Team" (Team Lead)
       1253 +  
       1254 +      5. MENTORS (dotted gold arrows, employee to employee)
       1255 +         - Properties: mentorship_since, focus_areas[], meeting_frequency
       1256 +         - Examples:
       1257 +           * Alice MENTORS Eve (since: 2021, focus: [leadership, product strategy])
       1258 +           * Carol MENTORS David (since: 2023, focus: [technical skills, code review])
       1259 +           * Frank MENTORS Alice (since: 2019, focus: [executive leadership])
       1260 +  
       1261 +      6. COLLABORATES_WITH (light blue undirected lines)
       1262 +         - Properties: projects_together[], interaction_frequency
       1263 +         - Examples:
       1264 +           * Bob ↔ Eve (projects: ["API v2.0"], frequency: daily)
       1265 +           * Bob ↔ David (projects: ["API v2.0"], frequency: daily)
       1266 +           * Carol ↔ Alice (projects: ["Mobile App"], frequency: weekly)
       1267 +  
       1268 +      7. SKILLED_IN (thin yellow arrows to skills)
       1269 +         - Properties: proficiency_level (1-10), years_experience, certified
       1270 +         - Examples:
       1271 +           * Bob SKILLED_IN "Python" (proficiency: 9, years: 8)
       1272 +           * Bob SKILLED_IN "System Design" (proficiency: 8, years: 6)
       1273 +           * David SKILLED_IN "Python" (proficiency: 5, years: 1)
       1274 +           * Eve SKILLED_IN "Product Strategy" (proficiency: 8, years: 4)
       1275 +           * Alice SKILLED_IN "Leadership" (proficiency: 9, years: 12)
       1276 +  
       1277 +      Sample data focus: Bob Martinez (Senior Engineer)
       1278 +      - Reports to: Carol (Manager)
       1279 +      - Department: Engineering
       1280 +      - Project: API v2.0 (Tech Lead, 80% time)
       1281 +      - Team: Backend Team (Senior Member)
       1282 +      - Skills: Python (9/10), System Design (8/10), React (6/10)
       1283 +      - Collaborates with: Eve (Product Manager on API v2.0), David (mentoring 
            + relationship)
       1284 +      - Career path visible: Junior Eng (2020) → Mid-level Eng (2021) → Senior Eng (2023)
       1285 +  
       1286 +      Layout: Hierarchical layout for management chain (top-down), with additional layers
            +  showing:
       1287 +      - Top: CTO (Frank)
       1288 +      - Second level: VP Engineering (Alice), HR Director (Grace)
       1289 +      - Third level: Engineering Manager (Carol), Product Manager (Eve - dotted line to 
            + Alice)
       1290 +      - Bottom: Engineers (Bob, David)
       1291 +      - Side clusters: Projects (connected to assigned employees)
       1292 +      - Side clusters: Skills (connected to skilled employees)
       1293 +  
       1294 +      Interactive features:
       1295 +      - Hover over employee: Show summary (name, title, manager, department, current 
            + projects)
       1296 +      - Click employee: Highlight all their relationships (reports, projects, skills, 
            + collaborations, mentorships)
       1297 +      - Double-click employee: Show "People finder" - find paths to other employees
       1298 +      - Hover over project: Show all assigned employees and their roles
       1299 +      - Click skill: Highlight all employees with that skill, color by proficiency level
       1300 +      - Filter controls:
       1301 +        * "Show only management chain" (REPORTS_TO relationships only)
       1302 +        * "Show only project teams" (ASSIGNED_TO relationships only)
       1303 +        * "Show collaboration network" (COLLABORATES_WITH only)
       1304 +        * "Show mentorship network" (MENTORS only)
       1305 +        * "Show skill network" (SKILLED_IN only)
       1306 +      - Search: Find employee by name, skill, or project
       1307 +      - Query builder:
       1308 +        * "Find Python experts in Engineering department"
       1309 +        * "Show reporting chain from David to Frank"
       1310 +        * "Find who Bob collaborates with regularly"
       1311 +        * "Show all people on API v2.0 project"
       1312 +  
       1313 +      Visual styling:
       1314 +      - Employee node size based on org level (larger = more senior)
       1315 +      - REPORTS_TO edges thicker and darker (emphasize hierarchy)
       1316 +      - MENTORS edges gold and dotted (warm, supportive relationship)
       1317 +      - ASSIGNED_TO edges dashed green (temporary project assignments)
       1318 +      - Color coding: Blue (org structure), Green (projects), Orange (teams), Yellow 
            + (skills), Gold (mentorship)
       1319 +      - Highlight path when showing relationships between two people
       1320 +  
       1321 +      Legend (always visible):
       1322 +      - Node shapes: Circle (Employee), Square (Department), Hexagon (Project), Rounded 
            + rect (Team), Triangle (Skill)
       1323 +      - Edge types: Solid thick (reports), Solid thin (membership), Dashed (project), 
            + Dotted (mentorship), Undirected (collaboration)
       1324 +      - Color meanings for each relationship type
       1325 +  
       1326 +      Educational value:
       1327 +      - Shows organizations are multi-dimensional, not just hierarchical trees
       1328 +      - Demonstrates how graph databases handle multiple simultaneous relationship types
       1329 +      - Illustrates informal networks (mentorship, collaboration) vs. formal (reporting)
       1330 +      - Shows how skills and projects cross organizational boundaries
       1331 +      - Demonstrates complex HR queries that would require many table joins in RDBMS
       1332 +  
       1333 +      Implementation: vis-network JavaScript library with hierarchical layout option
       1334 +      Canvas size: 1200x900px with zoom, pan, and extensive filter controls
       1335 +      Default state: Show all relationship types, hierarchical layout centered on CTO
       1336 +  </details>
       1337 +  
       1338 +  The power of the graph model is you can traverse multiple relationship types in a 
            + single query. "Find all engineers who report to someone I've worked with on a project, 
            + who have Python skills, and are not currently assigned to a project" combines:
       1339 +  - Social network (people I've worked with)
       1340 +  - Org chart (who reports to them)
       1341 +  - Skill network (Python filter)
       1342 +  - Project network (current availability)
       1343 +  
       1344 +  This is the kind of query that would be a nightmare in traditional HR systems with 
            + separate databases for org charts, skills, and project assignments. In a graph database,
            +  it's elegant and fast.
       1345 +  
       1346 +  ## Skill Management: Connecting People to Expertise
       1347 +  
       1348 +  Organizations need to know who can do what. Traditional HR systems have employees 
            + select skills from a dropdown menu during annual reviews, resulting in stale, 
            + self-reported data that's often inaccurate. Graph-based skill management is far more 
            + dynamic and trustworthy.
       1349 +  
       1350 +  In a skill graph:
       1351 +  - Skills are nodes (Python, Project Management, Customer Service, etc.)
       1352 +  - Employees are nodes
       1353 +  - Relationships include: SKILLED_IN, LEARNING, WANTS_TO_LEARN, ENDORSED_BY, TAUGHT
       1354 +  
       1355 +  The ENDORSED_BY relationship is particularly powerful. Like LinkedIn's skill 
            + endorsements, colleagues can endorse your skills, creating social proof. "Bob says 
            + you're good at Python" is more credible than you just claiming it yourself. Endorsements
            +  from senior engineers or people you've worked with on projects carry even more weight.
       1356 +  
       1357 +  Skill graphs enable sophisticated queries:
       1358 +  
       1359 +  - **Find experts**: "Show me the top 3 Python experts in the company (by endorsement 
            + count and years of experience)"
       1360 +  - **Find teachers**: "Who can teach React to our new hires? (people with high React 
            + proficiency who have the TEACHES relationship)"
       1361 +  - **Succession planning**: "If Alice leaves, who could take over her responsibilities? 
            + (people with overlapping skill sets)"
       1362 +  - **Team assembly**: "Build a team for a mobile app project (need: Swift, UI design, 
            + backend API, project management)"
       1363 +  - **Gap analysis**: "What skills do we need for our AI initiative that we don't 
            + currently have in-house?"
       1364 +  - **Learning paths**: "What skills should I learn next to move from Junior to Senior 
            + Engineer? (analyze skill patterns of current Senior Engineers)"
       1365 +  
       1366 +  Skills can also have attributes like proficiency level (1-10), years of experience, 
            + certifications earned, and last used date. This turns "Alice knows Python" into "Alice 
            + has 8/10 proficiency in Python with 5 years of experience, last used 2 months ago, with 
            + AWS Python certification."
       1367 +  
       1368 +  Modern organizations increasingly use skill graphs for talent mobility: instead of 
            + posting jobs and waiting for applications, they query the skill graph to find people who
            +  already have 80% of the required skills and might be interested in growing into the 
            + role. This makes career development more proactive and data-driven.
       1369 +  
       1370 +  ## Task Assignment: Optimizing Project Workflows
       1371 +  
       1372 +  The final piece of the social network puzzle is task assignment: matching work to 
            + people based on skills, availability, interests, and relationships. This is where all 
            + the patterns we've explored come together into a practical application.
       1373 +  
       1374 +  Task assignment graphs connect:
       1375 +  - **Tasks** (nodes with properties: description, required_skills[], estimated_hours, 
            + priority, deadline)
       1376 +  - **People** (employees with skills, availability, workload)
       1377 +  - **Projects** (collections of tasks)
       1378 +  - **Teams** (groups working together)
       1379 +  
       1380 +  The assignment process is a graph matching problem:
       1381 +  1. Task requires skills [Python, API design, testing]
       1382 +  2. Query graph for people with those skills who aren't overloaded
       1383 +  3. Consider preferences (who wants to work on backend projects?)
       1384 +  4. Consider relationships (who has worked together successfully before?)
       1385 +  5. Create ASSIGNED_TO relationship between person and task
       1386 +  
       1387 +  <details>
       1388 +      <summary>Task Assignment Optimization Workflow</summary>
       1389 +      Type: workflow
       1390 +  
       1391 +      Purpose: Show how task assignment in project management systems uses graph 
            + databases to match tasks with team members based on skills, availability, preferences, 
            + and team dynamics
       1392 +  
       1393 +      Visual style: Swimlane flowchart with decision points and optimization steps
       1394 +  
       1395 +      Swimlanes:
       1396 +      - Project Manager (top)
       1397 +      - Assignment System (middle - main process flow)
       1398 +      - Graph Database (queries and analysis)
       1399 +      - Team Members (bottom - notifications)
       1400 +  
       1401 +      Process Flow:
       1402 +  
       1403 +      1. Start: "New Task Created" (Project Manager lane)
       1404 +         Hover text: "PM creates task: 'Implement user authentication API', priority: 
            + high, deadline: 2 weeks"
       1405 +         Shape: Rounded rectangle
       1406 +         Color: Green
       1407 +  
       1408 +      2. Process: "Extract Task Requirements" (Assignment System)
       1409 +         Hover text: "Parse task description, identify required skills, estimate effort 
            + hours"
       1410 +         Details:
       1411 +           - Required skills: [Python, API design, Security, Testing]
       1412 +           - Estimated hours: 40
       1413 +           - Priority: High
       1414 +           - Deadline: 14 days
       1415 +  
       1416 +      3. Process: "Query Skill Graph" (Graph Database)
       1417 +         Hover text: "MATCH (person:Employee)-[s:SKILLED_IN]->(skill:Skill) WHERE 
            + skill.name IN ['Python', 'API design', 'Security', 'Testing'] RETURN person, skill, 
            + s.proficiency"
       1418 +         Details: Returns candidates with skill matches and proficiency levels
       1419 +  
       1420 +      4. Process: "Check Availability" (Graph Database)
       1421 +         Hover text: "MATCH (person)-[:ASSIGNED_TO]->(task) RETURN person, 
            + SUM(task.remaining_hours) as current_workload"
       1422 +         Details: Calculate current workload for each candidate
       1423 +  
       1424 +      5. Process: "Calculate Match Scores" (Assignment System)
       1425 +         Hover text: "Score each candidate based on: skill match (40%), availability 
            + (30%), past performance (20%), preferences (10%)"
       1426 +         Details:
       1427 +           - Skill match: How many required skills they have, at what proficiency
       1428 +           - Availability: Current workload vs capacity (40h/week)
       1429 +           - Past performance: Success rate on similar tasks
       1430 +           - Preferences: Interest in this type of work
       1431 +  
       1432 +      6. Decision: "Clear Best Match?" (Assignment System)
       1433 +         Hover text: "Is there one candidate with score >0.85 and available capacity?"
       1434 +         Shape: Diamond
       1435 +         Color: Yellow
       1436 +  
       1437 +      7a. Process: "Auto-Assign to Best Match" (if YES)
       1438 +          Hover text: "Create ASSIGNED_TO relationship, update task status, send 
            + notification"
       1439 +          Color: Green
       1440 +  
       1441 +      7b. Process: "Generate Candidate List" (if NO - tie or no clear winner)
       1442 +          Hover text: "Create ranked list of top 3-5 candidates with scores and 
            + reasoning"
       1443 +          Color: Orange
       1444 +  
       1445 +      8b. Process: "Present Options to PM" (Assignment System → Project Manager)
       1446 +          Hover text: "Show: Candidate A (score: 0.78, available next week), Candidate B 
            + (score: 0.75, available now but less experience), etc."
       1447 +  
       1448 +      9b. Decision: "PM Selects Candidate" (Project Manager)
       1449 +          Hover text: "PM reviews options and makes final choice based on strategic 
            + considerations"
       1450 +  
       1451 +      10. Process: "Create Assignment" (Assignment System)
       1452 +          Hover text: "Create ASSIGNED_TO relationship in graph database"
       1453 +          Details:
       1454 +            - Edge properties: assigned_date, estimated_hours, priority, deadline
       1455 +            - Update person's workload
       1456 +            - Update task status to 'assigned'
       1457 +  
       1458 +      11. Process: "Update Team Network" (Graph Database)
       1459 +          Hover text: "Strengthen COLLABORATES_WITH relationships between assigned person
            +  and project team members"
       1460 +          Details: Increment collaboration counter, update last_collaboration_date
       1461 +  
       1462 +      12. Process: "Check Team Balance" (Assignment System)
       1463 +          Hover text: "Analyze workload distribution across team to prevent burnout and 
            + ensure fairness"
       1464 +          Metrics:
       1465 +            - Workload variance across team
       1466 +            - Skills being utilized vs. sitting idle
       1467 +            - New vs. routine work distribution
       1468 +  
       1469 +      13. Decision: "Team Imbalanced?" (Assignment System)
       1470 +          Hover text: "Is anyone >120% capacity or >50% team idle?"
       1471 +          Shape: Diamond
       1472 +  
       1473 +      14a. Process: "Suggest Rebalancing" (if YES to imbalance)
       1474 +           Hover text: "Generate suggestions: 'Consider moving Task X from Bob to Carol 
            + to balance workload'"
       1475 +           Color: Orange
       1476 +  
       1477 +      14b. Process: "Continue Monitoring" (if NO to imbalance)
       1478 +           Color: Green
       1479 +  
       1480 +      15. Process: "Notify Assigned Person" (Team Members lane)
       1481 +          Hover text: "Send notification: 'You've been assigned to task: Implement user 
            + auth API, deadline: Nov 1'"
       1482 +          Details: Include context, required skills, related team members, priority
       1483 +  
       1484 +      16. Process: "Log Assignment for Learning" (Graph Database)
       1485 +          Hover text: "Record assignment for future analysis of assignment patterns and 
            + outcomes"
       1486 +          Details: Used to improve matching algorithm over time
       1487 +  
       1488 +      17. End: "Task Assigned & Tracked" (Assignment System)
       1489 +          Hover text: "Task actively assigned, progress tracking begins"
       1490 +          Shape: Rounded rectangle
       1491 +          Color: Green
       1492 +  
       1493 +      PARALLEL PROCESS (runs continuously):
       1494 +      - "Monitor Task Progress" → "Update Skill Proficiency Based on Performance"
       1495 +      - Hover text: "As tasks complete, update person's skill proficiency and track 
            + success/failure patterns"
       1496 +  
       1497 +      Annotations:
       1498 +  
       1499 +      - Arrow from "Calculate Match Scores" to callout box:
       1500 +        "Scoring Formula Example:
       1501 +         Score = (skill_match × 0.4) + (availability × 0.3) + (past_performance × 0.2) + 
            + (interest × 0.1)
       1502 +  
       1503 +         Candidate Alice:
       1504 +         - Skills: Python (9/10), API (8/10), Security (7/10), Testing (6/10) → 0.90
       1505 +         - Availability: 10h/40h used this week → 0.75
       1506 +         - Past performance: 8/10 similar tasks succeeded → 0.80
       1507 +         - Interest: Expressed interest in security work → 0.90
       1508 +         TOTAL: (0.90×0.4) + (0.75×0.3) + (0.80×0.2) + (0.90×0.1) = 0.845"
       1509 +  
       1510 +      - Arrow from "Check Team Balance" to metrics dashboard:
       1511 +        "Team Workload Dashboard:
       1512 +         Alice: 35h (88% capacity) ✓
       1513 +         Bob: 52h (130% capacity) ⚠️ OVERLOADED
       1514 +         Carol: 18h (45% capacity) ✓
       1515 +         David: 40h (100% capacity) ✓
       1516 +         → Suggestion: Reassign 12h from Bob to Carol"
       1517 +  
       1518 +      Color coding:
       1519 +      - Green: Successful completion, optimal state
       1520 +      - Yellow: Decision points
       1521 +      - Orange: Manual intervention needed, warnings
       1522 +      - Blue: Graph database operations
       1523 +      - Purple: Notifications and communication
       1524 +  
       1525 +      Visual elements:
       1526 +      - Graph database icon next to query boxes
       1527 +      - Person icons in Team Members lane
       1528 +      - Calendar icon for deadline checks
       1529 +      - Scale/balance icon for workload balancing
       1530 +      - Bell icon for notifications
       1531 +  
       1532 +      Implementation: Flowchart with swimlanes (BPMN style)
       1533 +      Size: 1400x1000px to accommodate detailed workflow and annotations
       1534 +  </details>
       1535 +  
       1536 +  Good task assignment systems also learn from history. If Alice and Bob have 
            + successfully collaborated on 5 previous projects, the system might prioritize assigning 
            + them to work together again. If Carol struggled with a backend task last quarter, maybe 
            + don't assign her to another backend task until she's completed some training.
       1537 +  
       1538 +  The graph also reveals patterns like: "Data science tasks take 30% longer when assigned
            +  to people outside the data science team" or "urgent bugs get fixed faster when assigned
            +  to the person who originally wrote that code (found via AUTHORED relationship)."
       1539 +  
       1540 +  ## Backlog Management: Prioritizing the Work Queue
       1541 +  
       1542 +  Every development team has a backlog: a list of tasks, features, and bugs waiting to be
            +  addressed. Traditional backlogs are flat lists sorted by priority, but graph-based 
            + backlog management captures the rich dependencies and relationships between tasks.
       1543 +  
       1544 +  Tasks can have relationships like:
       1545 +  - DEPENDS_ON: Task B can't start until Task A is complete
       1546 +  - BLOCKS: Task A is blocking Task B (inverse of DEPENDS_ON)
       1547 +  - RELATED_TO: Tasks share common themes or components
       1548 +  - DUPLICATES: Tasks are essentially the same work
       1549 +  - SUBTASK_OF: Task hierarchy for breaking down large features
       1550 +  
       1551 +  With these relationships, the graph reveals:
       1552 +  - **Critical path**: Which tasks block the most other work?
       1553 +  - **Parallel work**: Which tasks can be done simultaneously?
       1554 +  - **Bottlenecks**: Which task dependencies create waiting time?
       1555 +  - **Orphaned tasks**: Which tasks have no dependencies and could be done anytime?
       1556 +  - **Impact radius**: If we do this task, how many blocked tasks become unblocked?
       1557 +  
       1558 +  Graph visualization makes backlog prioritization much clearer. Instead of staring at a 
            + flat list of 200 tasks wondering what to do first, you see a network diagram showing 
            + that fixing bug #423 would unblock 15 other tasks, making it high-priority even though 
            + it seemed minor in isolation.
       1559 +  
       1560 +  Modern backlog management also incorporates:
       1561 +  - User story relationships (epic → feature → task)
       1562 +  - Skill requirements (to suggest who should work on what)
       1563 +  - Customer impact (which features affect the most users)
       1564 +  - Technical debt tracking (which components are fragile and need refactoring)
       1565 +  
       1566 +  All of this is naturally modeled in a graph, where nodes are tasks and edges are 
            + dependencies, relationships, and impacts.
       1567 +  
       1568 +  ## Putting It All Together: The Social Graph Powers Everything
       1569 +  
       1570 +  We started this chapter talking about Instagram and X, but by now you've seen that 
            + social network patterns appear everywhere:
       1571 +  - Product review platforms (users, reviews, products, reputation)
       1572 +  - GitHub (developers, repositories, commits, stars, followers)
       1573 +  - HR systems (employees, skills, projects, org charts)
       1574 +  - Project management (tasks, assignments, dependencies, teams)
       1575 +  - Content platforms (creators, content, comments, likes, shares)
       1576 +  
       1577 +  The common thread is **people connected by relationships, creating content, building 
            + reputation, and influencing others**. Graph databases excel at modeling these patterns 
            + because they mirror how humans naturally think about social connections.
       1578 +  
       1579 +  When you're building any system where people interact, consider these questions:
       1580 +  - What types of users exist in my system?
       1581 +  - How do they connect to each other?
       1582 +  - What content do they create?
       1583 +  - How do others react to that content?
       1584 +  - How is reputation and trust established?
       1585 +  - How do I detect bad actors or fake accounts?
       1586 +  - How do I make good recommendations?
       1587 +  
       1588 +  If you can answer these questions by drawing nodes and edges, you're thinking in 
            + graphs—and you're ready to build modern social systems that scale gracefully and query 
            + efficiently.
       1589 +  
       1590 +  The things you learned in this chapter apply to any system where reputation matters, 
            + where people comment on things, where social proof influences decisions, where expertise
            +  needs to be found, or where relationships drive value. That's not just social 
            + media—that's most of the modern digital world.
       1591 +  
       1592 +  Welcome to seeing social networks everywhere. You're welcome (or sorry, depending on 
            + your perspective).

⏺ Perfect! I've successfully generated the chapter content. Now let me mark the todos as complete and
  verify concept coverage:

⏺ Let me verify that all 15 concepts from the chapter outline are covered:

  Concept Coverage Verification:

  1. ✅ Social Networks - Covered in introduction and "What Makes Something a Social Network?"
  2. ✅ Friend Graphs - Dedicated section with MicroSim
  3. ✅ Influence Graphs - Dedicated section with MicroSim
  4. ✅ Follower Networks - Dedicated section with diagram
  5. ✅ Activity Streams - Dedicated section with timeline visualization
  6. ✅ User Profiles - Dedicated section with graph model
  7. ✅ Relationship Types - Dedicated section with multi-relationship graph model
  8. ✅ Sentiment Analysis - Dedicated section with workflow diagram
  9. ✅ Natural Language Processing - Dedicated section with NLP pipeline diagram
  10. ✅ Fake Account Detection - Dedicated section with detection MicroSim
  11. ✅ Human Resources Modeling - Dedicated section introducing HR applications
  12. ✅ Org Chart Models - Dedicated section with multi-dimensional org chart model
  13. ✅ Skill Management - Dedicated section explaining skill graphs
  14. ✅ Task Assignment - Dedicated section with optimization workflow
  15. ✅ Backlog Management - Dedicated section on task dependencies

⏺ Excellent! All concepts verified. Now let me generate the final summary report:

⏺ ---
  ✅ Chapter Content Generated Successfully!

  Chapter: 07-social-network-modeling
  Reading Level: Senior High School (Grades 10-12)
  Tone: Lighthearted and engaging
  Content Length: ~7,500 words

  Special Requirements Met:

  ✅ Emphasized that social networks are everywhere (reviews, ratings, GitHub reputation, Stack Overflow
  karma, etc.)
  ✅ Lighthearted, engaging tone throughout
  ✅ Senior-high school reading level (15-22 word sentences, balanced concrete/abstract examples)
  ✅ Strong opening that challenges students' assumptions about what counts as a "social network"

  Non-Text Elements Breakdown:

  Markdown tables: 3
  - User profile properties table
  - Relationship types properties table
  - NLP platform applications table

  Markdown lists: 15+ throughout content
  - Key components of social networks
  - Common friend graph queries
  - Follower network dynamics
  - Activity stream patterns
  - Relationship type categories
  - Influence measurement methods
  - Sentiment analysis applications
  - NLP tasks
  - Graph-based detection signals
  - HR relationship types
  - Org chart node/relationship types
  - Skill graph queries
  - Task assignment elements
  - Task relationship types
  - Backlog insights

  Interactive Elements (in <details> blocks): 11

  1. Graph Models (vis-network): 3
    - User Profile Graph Model Visualization
    - Multi-Relationship Network Graph Model
    - Multi-Dimensional Org Chart Graph Model
  2. MicroSims (p5.js): 3
    - Friend Recommendation MicroSim
    - Influence Propagation MicroSim
    - Fake Account Detection Pattern MicroSim
  3. Diagrams: 2
    - Follower Network Visualization Diagram
    - NLP Entity Extraction and Graph Building Diagram
  4. Workflows: 2
    - Sentiment Analysis Flow Workflow Diagram
    - Task Assignment Optimization Workflow
  5. Timeline: 1
    - Activity Stream Timeline Visualization

  Skills Required for Implementation:

  - microsim-p5 (3 MicroSims requiring implementation)
  - vis-network (3 graph models requiring implementation)
  - timeline-generator (1 timeline requiring implementation)
  - mermaid-generator or diagram tools (2 workflows + 2 diagrams requiring implementation)

  Concept Coverage: 15/15 ✅

  All concepts from the chapter outline are thoroughly covered:

  | #   | Concept                     | Coverage                              |
  |-----|-----------------------------|---------------------------------------|
  | 1   | Social Networks             | ✅ Introduction + dedicated section    |
  | 2   | Friend Graphs               | ✅ Full section with MicroSim          |
  | 3   | Influence Graphs            | ✅ Full section with MicroSim          |
  | 4   | Follower Networks           | ✅ Full section with diagram           |
  | 5   | Activity Streams            | ✅ Full section with timeline          |
  | 6   | User Profiles               | ✅ Full section with graph model       |
  | 7   | Relationship Types          | ✅ Full section with multi-graph model |
  | 8   | Sentiment Analysis          | ✅ Full section with workflow          |
  | 9   | Natural Language Processing | ✅ Full section with diagram           |
  | 10  | Fake Account Detection      | ✅ Full section with MicroSim          |
  | 11  | Human Resources Modeling    | ✅ Dedicated introduction section      |
  | 12  | Org Chart Models            | ✅ Full section with graph model       |
  | 13  | Skill Management            | ✅ Full section with examples          |
  | 14  | Task Assignment             | ✅ Full section with workflow          |
  | 15  | Backlog Management          | ✅ Full section with concepts          |

  Pedagogical Structure:

  The content follows a simple-to-complex progression:
  1. Basic social network concepts (profiles, friends)
  2. Intermediate patterns (followers, activity, relationships)
  3. Advanced analysis (influence, sentiment, NLP)
  4. Complex applications (fake detection, HR systems)
  5. Practical implementations (org charts, skills, tasks)

  Key Features:

  - Engaging opening that reframes social networks beyond social media
  - Real-world examples throughout (GitHub, Amazon reviews, Stack Overflow)
  - Interactive elements average every 2-3 sections
  - Consistent tone that's conversational but educational
  - Strong conclusion that ties everything together

  The chapter successfully demonstrates that social network patterns appear everywhere people interact
  with systems - exactly as you requested!

─────────────────────────────────────────────────────────────────────────────────────────────────────────────
> write the session log to  
─────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ws/intro-to-graph                                                                           ⧉ In index.md
  ⏵⏵ bypass permissions on (shift+tab to cycle)             Update available! Run: brew upgrade claude-code





