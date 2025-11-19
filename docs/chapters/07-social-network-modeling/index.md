# Social Network Modeling

## Summary

This chapter applies graph database concepts to social network applications, demonstrating how to model friend graphs, influence networks, and organizational structures. You'll learn to represent complex social relationships including followers, activity streams, and user profiles while exploring advanced applications like sentiment analysis integration and fake account detection. The chapter extends to human resources applications including org chart modeling, skill management systems, and task assignment workflows.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Social Networks
2. Friend Graphs
3. Influence Graphs
4. Follower Networks
5. Activity Streams
6. User Profiles
7. Relationship Types
8. Sentiment Analysis
9. Natural Language Processing
10. Fake Account Detection
11. Human Resources Modeling
12. Org Chart Models
13. Skill Management
14. Task Assignment
15. Backlog Management

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: Labeled Property Graph Information Model](../03-labeled-property-graph-model/index.md)
- [Chapter 4: Query Languages for Graph Databases](../04-query-languages/index.md)

---

## Introduction: Social Networks Are Everywhere (Yes, Even Where You Don't Expect Them)

When you hear "social network," you probably think of Instagram, TikTok, or X (formerly Twitter). But here's the plot twist: social network patterns show up almost everywhere in our digital lives, often hiding in plain sight. That Amazon product with 4.7 stars? It's a social network of reviewers with varying credibility based on their review history. Your GitHub profile showing contributions and merged pull requests? That's reputation tracking in a developer social network. Stack Overflow karma points? Reddit upvotes? Yelp reviewer badges? All social networks.

Even your school or workplace runs on social network principles. When teachers assign group projects, they're creating task networks. When your manager checks who has skills in Python before assigning a coding project, they're querying a skill network. Any system where people have reputations, write comments, give ratings, or connect with each other is fundamentally a social network—and graph databases excel at modeling these patterns.

In this chapter, you'll learn how to model social networks using graph databases, from simple friend connections to complex systems involving influence, sentiment analysis, and fake account detection. We'll explore how the same patterns that power Facebook also power human resources systems, project management tools, and content moderation platforms. By the end, you'll see social network patterns everywhere you look (you're welcome for that superpower).

## What Makes Something a Social Network?

At its core, a social network is just people (or accounts, or profiles) connected by relationships. But modern social networks are way more interesting than that simple definition suggests. They track who influences whom, what content people create, how others react to that content, and even whether accounts are real humans or bots pretending to be humans.

The magic of graph databases is that they can model all these dimensions naturally. While a traditional database would store user data in one table, friendships in another table, posts in a third table, and comments in a fourth table (requiring complex joins to answer simple questions like "show me my friends' recent posts"), a graph database stores everything as an interconnected network that mirrors how we actually think about social relationships.

Let's break down the key components that make up modern social networks:

- **User Profiles**: The people (or accounts) in the network, with their personal information, preferences, and history
- **Connections**: Relationships between users, which can be symmetric (mutual friends) or directed (followers)
- **Content**: Posts, comments, reviews, photos, videos, or any other user-generated material
- **Interactions**: Likes, shares, comments, reactions, and other ways people engage with content
- **Reputation Signals**: Karma scores, review ratings, follower counts, verification badges, and trust indicators
- **Metadata**: When things happened, where they happened, what device was used, and other contextual information

## User Profiles: More Than Just Names and Photos

Every social network starts with user profiles—the nodes that represent people in the graph. But unlike a simple contact list, social network profiles are rich with information that helps the network function better. Your profile isn't just your name and photo; it's a collection of attributes that helps the system understand who you are, what you care about, and how trustworthy you are.

In a graph database, each user profile is a node with properties. Some properties are basic (name, email, birth date), while others emerge from user behavior (reputation score, activity level, account age). The beauty of graph databases' flexible schema is that different users can have different properties—power users might have badges, verified accounts might have verification timestamps, and content creators might have additional metadata about their posting history.

Here's what a typical user profile node might contain:

| Property Category | Examples | Purpose |
|-------------------|----------|---------|
| Basic Identity | username, email, display_name, profile_photo | Identify and display the user |
| Demographics | age, location, language, timezone | Personalize content and connections |
| Account Metadata | created_date, last_login, account_status | Track account lifecycle |
| Reputation Signals | reputation_score, verified_badge, strike_count | Indicate trustworthiness |
| Privacy Settings | profile_visibility, messaging_allowed | Control user experience |
| Behavioral Metrics | posts_count, avg_response_time, activity_level | Understand user engagement |

#### Diagram: User Profile Graph Model Visualization

<details>
    <summary>User Profile Graph Model Visualization</summary>
    Type: graph-model

    Purpose: Show how user profile nodes connect to other entities in a social network graph

    Node types:
    1. User (blue circles)
       - Properties: username, email, reputation_score, created_date, verified
       - Example nodes: "Alice" (verified, reputation: 892), "Bob" (reputation: 234), "Charlie" (verified, reputation: 1,450)

    2. Post (light green squares)
       - Properties: content, timestamp, post_type, visibility
       - Example nodes: "Alice's vacation photo", "Bob's tech question", "Charlie's tutorial video"

    3. Topic (purple triangles)
       - Properties: topic_name, category
       - Example nodes: "Photography", "Web Development", "Travel"

    4. Badge (gold stars)
       - Properties: badge_name, criteria, rarity
       - Example nodes: "Top Contributor", "Verified Expert", "Early Adopter"

    Edge types:
    1. FOLLOWS (solid blue arrows)
       - Properties: since_date, notification_settings
       - Directed: User → User
       - Example: Bob FOLLOWS Alice, Charlie FOLLOWS Alice

    2. CREATED (solid green arrows)
       - Properties: created_timestamp
       - Directed: User → Post
       - Example: Alice CREATED "vacation photo"

    3. INTERESTED_IN (dashed purple arrows)
       - Properties: interest_level (0-10), added_date
       - Directed: User → Topic
       - Example: Alice INTERESTED_IN "Photography" (level: 9)

    4. EARNED (dotted gold arrows)
       - Properties: earned_date, achievement_context
       - Directed: User → Badge
       - Example: Charlie EARNED "Top Contributor" (2023-05-15)

    Sample data:
    - Alice (verified, reputation: 892)
      ├─ CREATED → "Sunset photography tips" (Post)
      ├─ INTERESTED_IN → "Photography" (level: 9)
      ├─ INTERESTED_IN → "Travel" (level: 7)
      ├─ EARNED → "Top Contributor" badge
      └─ Followed by Bob and Charlie

    - Bob (reputation: 234)
      ├─ FOLLOWS → Alice
      ├─ FOLLOWS → Charlie
      ├─ CREATED → "React hooks question" (Post)
      └─ INTERESTED_IN → "Web Development" (level: 6)

    - Charlie (verified, reputation: 1,450)
      ├─ FOLLOWS → Alice
      ├─ CREATED → "Advanced CSS tutorial" (Post)
      ├─ INTERESTED_IN → "Web Development" (level: 10)
      └─ EARNED → "Verified Expert" badge

    Layout: Force-directed with users forming a central cluster, content and topics radiating outward

    Interactive features:
    - Hover over user node: Show full profile summary (username, reputation, badges, join date)
    - Click user node: Highlight all posts created by that user and all users they follow
    - Double-click user: Show expanded network (followers of followers)
    - Hover over edge: Show relationship details (follow date, interaction frequency)
    - Click badge: Show all users who have earned that badge
    - Filter controls: Show/hide different relationship types

    Visual styling:
    - User node size based on reputation score (larger = higher reputation)
    - Verified users have gold border
    - Edge thickness based on interaction frequency
    - Color saturation indicates activity level (brighter = more active)

    Legend:
    - Node shapes: Circle (User), Square (Post), Triangle (Topic), Star (Badge)
    - Edge styles: Solid (action), Dashed (preference), Dotted (achievement)
    - Border colors: Gold (verified), Gray (regular)

    Implementation: vis-network JavaScript library
    Canvas size: 900x700px with zoom and pan controls
</details>

One key insight: reputation isn't stored in a single property—it emerges from the graph structure. A user's reputation might be calculated from how many followers they have, how many of their posts get liked, how many verified users follow them, and how long their account has existed. This is where graphs shine: they make these relationship-based calculations fast and natural.

## Friend Graphs: The Foundation of Social Connections

The simplest social network pattern is the friend graph: nodes representing people, connected by "friend" relationships. This is how Facebook started—just college students and their friendships. But even this seemingly simple pattern has interesting complexity when you look closely.

In most friendship systems, the relationship is mutual (symmetric): if Alice is friends with Bob, then Bob is friends with Alice. This differs from "following" relationships, which we'll explore next. The FRIENDS_WITH relationship is undirected, meaning it works both ways automatically.

Creating a friend connection in a graph database is remarkably simple compared to the relational database equivalent. Instead of inserting a row into a "friendships" junction table with two foreign keys, you simply create an edge between two user nodes. Queries like "show me Alice's friends" or "how many mutual friends do Alice and Bob have?" become one-line graph traversals instead of multi-table joins.

Here are some common friend graph queries and why they matter:

- **Direct friends**: `MATCH (user)-[:FRIENDS_WITH]-(friend)` - The foundation of any social experience
- **Friends of friends**: `MATCH (user)-[:FRIENDS_WITH*2]-(fof)` - Potential new connections and recommendations
- **Mutual friends**: `MATCH (user1)-[:FRIENDS_WITH]-(mutual)-[:FRIENDS_WITH]-(user2)` - Social proof for new connections
- **Friend groups**: `MATCH (user)-[:FRIENDS_WITH]-(friend)-[:FRIENDS_WITH]-(friendOfFriend)` - Discovering communities

#### Diagram: Friend Recommendation MicroSim

<details>
    <summary>Friend Recommendation MicroSim</summary>
    Type: microsim

    Learning objective: Demonstrate how friend-of-friend recommendations work in social networks and how different algorithms can prioritize recommendations

    Canvas layout (1000x700px):
    - Left side (700x700): Network visualization showing user nodes and connections
    - Right side (300x700): Control panel and recommendation results

    Visual elements in network view:
    - Current user (you) shown as large blue circle in center
    - Direct friends shown as medium green circles
    - Friends-of-friends shown as smaller orange circles
    - Strangers (not connected) shown as tiny gray circles
    - Edges between nodes shown as thin gray lines
    - When recommendation is selected, highlight path from you → friend → recommended person in yellow

    Interactive controls:
    - Button: "Generate Network" (creates random social graph with 40-60 nodes)
    - Slider: "Your friend count" (5-20 friends, default: 10)
    - Dropdown: "Recommendation algorithm"
      * Mutual Friends Count (default)
      * Common Interests
      * Network Centrality
      * Activity Level
    - Button: "Find Recommendations"
    - Display panel: Top 5 friend recommendations with reasons

    Network generation parameters:
    - Total nodes: 50 (1 you + 49 others)
    - Your direct friends: controlled by slider
    - Average friends per person: 8-12 (random)
    - Each person has 2-5 random interests from pool (Sports, Music, Tech, Art, Travel, Food, Gaming, Reading)
    - Activity level: random 1-10 per person

    Recommendation algorithms:
    1. Mutual Friends Count: Ranks friends-of-friends by number of mutual connections
       - Formula: COUNT(mutual_friends)
       - Reasoning: "You have 4 mutual friends with this person"

    2. Common Interests: Ranks by shared interest tags
       - Formula: COUNT(shared_interests) / TOTAL(your_interests)
       - Reasoning: "You both like Tech, Gaming, and Music"

    3. Network Centrality: Recommends well-connected people
       - Formula: COUNT(their_total_friends) - penalize if already connected
       - Reasoning: "This person knows a lot of people (18 friends)"

    4. Activity Level: Recommends active users
       - Formula: activity_score * mutual_connection_bonus
       - Reasoning: "Very active user (activity: 9/10) with 2 mutual friends"

    Behavior:
    - On "Generate Network": Create random graph, position nodes using force-directed layout
    - On "Find Recommendations": Run selected algorithm, display top 5 results
    - Hover over recommended person: Highlight all paths from you to them through friends
    - Click recommended person: Show detailed profile (friend count, interests, activity level, mutual friends list)
    - Animation: When showing recommendation, animate yellow highlight along the connection path

    Visual feedback:
    - Recommendation results show as cards with: name, reason, mutual friends count, shared interests, connection strength bar
    - Color code connection strength: Green (strong), Yellow (medium), Orange (weak)

    Educational value:
    - Students see different algorithms produce different recommendations
    - Visualizes the "friends of friends" concept
    - Shows why mutual friends is a strong social signal
    - Demonstrates trade-offs in recommendation strategies

    Implementation: p5.js with force-directed graph layout (or use simple geometric positioning)
    Default state: Start with network already generated so students can immediately explore
</details>

The friend graph becomes more interesting when we calculate metrics like clustering coefficient (how many of your friends are friends with each other) or identify tightly-knit groups (cliques). These patterns help social networks suggest new friends, detect spam accounts (real people have clustered friend networks, bots have random connections), and organize content (show posts from friend groups differently).

## Follower Networks: When Relationships Aren't Symmetric

While friend relationships are mutual, many social networks use asymmetric follower relationships instead. On X (Twitter), Instagram, or TikTok, you can follow someone without them following you back. This creates a directed graph where edges have direction and meaning.

The FOLLOWS relationship is fundamentally different from FRIENDS_WITH. When Alice follows Bob, she sees Bob's posts, but Bob doesn't necessarily see Alice's posts unless he follows her back. This asymmetry enables influencer dynamics, fan relationships, and information propagation patterns that couldn't exist in symmetric friend networks.

Directed graphs enable questions that have no meaning in undirected graphs:

- **Followers**: Who follows me? `MATCH (follower)-[:FOLLOWS]->(me)`
- **Following**: Who do I follow? `MATCH (me)-[:FOLLOWS]->(following)`
- **Mutual follows**: Who do I follow who also follows me back? (These are your "mutuals")
- **Follow ratio**: Following count / Follower count (a metric some use to judge account quality)
- **Reach**: How many people could potentially see my post? (followers + their followers + ...)

#### Diagram: Follower Network Visualization Diagram

<details>
    <summary>Follower Network Visualization Diagram</summary>
    Type: diagram

    Purpose: Illustrate the difference between symmetric friendships and asymmetric follower relationships

    Layout: Two side-by-side network diagrams for comparison

    LEFT SIDE: "Symmetric Friend Network (Facebook-style)"
    - 5 user nodes arranged in a circle: Alice, Bob, Carol, Dave, Eve
    - Undirected edges (lines without arrows) between nodes:
      * Alice ←→ Bob
      * Alice ←→ Carol
      * Bob ←→ Dave
      * Carol ←→ Dave
      * Dave ←→ Eve
    - All edges are same thickness, colored blue
    - Label: "All friendships are mutual"
    - Annotation: "If Alice is friends with Bob, Bob is automatically friends with Alice"

    RIGHT SIDE: "Asymmetric Follower Network (Twitter/Instagram-style)"
    - Same 5 user nodes: Alice, Bob, Carol, Dave, Eve
    - Directed edges (arrows) showing follow relationships:
      * Alice → Bob (Alice follows Bob)
      * Bob → Alice (Bob follows Alice) [these two create a mutual]
      * Alice → Carol (Alice follows Carol)
      * Carol → Bob (Carol follows Bob, but Bob doesn't follow back)
      * Dave → Bob (Dave follows Bob)
      * Dave → Eve (Dave follows Eve)
      * Eve → Bob (Eve follows Bob)
      * Bob → Carol (Bob follows Carol)
    - Color coding for edges:
      * Green thick arrows: Mutual follows (bidirectional)
      * Gray thin arrows: One-way follows
    - Label: "Follows can be one-directional"
    - Annotation: "Bob has 4 followers (Alice, Carol, Dave, Eve) but only follows 2 people back (Alice, Carol)"

    Key insights callout (bottom):
    - "In follower networks, you can have INFLUENCERS (many followers, few following)"
    - "Mutual follows indicate stronger relationships"
    - "One-way follows create information hierarchies"

    Visual style: Clean network diagram with circular nodes labeled with names
    Node size: All equal size
    Color scheme: Blue for left diagram (friendship), Green/Gray for right diagram (followers)
    Include legend explaining arrow colors on right side

    Implementation: SVG diagram or simple illustration tool
</details>

The follower model creates interesting dynamics. Users with many followers but few following are influencers. Users with roughly equal followers and following are regular community participants. Accounts that follow thousands but have few followers are often spam or growth-hacking bots. These patterns would be invisible in a symmetric friend model.

Follower networks also enable information cascades: when an influencer posts content, it can reach thousands directly, then spread further as followers share with their followers. Graph databases can model these propagation patterns and even predict which content is likely to go viral based on who shares it first.

## Activity Streams: Adding Time to the Social Graph

Social networks aren't static—they're constantly flowing with new content. Activity streams capture this temporal dimension by tracking who posts what, when. Every tweet, Instagram photo, Facebook status, Reddit comment, or product review is a node in the graph, connected to its creator and timestamp.

In graph databases, activity stream nodes typically have a CREATED_BY edge pointing to the user who created them, and often a POSTED_IN or TAGGED_WITH edge connecting them to topics, groups, or categories. The timestamp property on the post node enables time-based queries: "show me posts from the last hour" or "what were the trending topics last Tuesday?"

The activity stream pattern appears everywhere:

- **Social media posts**: Twitter tweets, Facebook updates, Instagram photos
- **Reviews and ratings**: Amazon product reviews, Yelp restaurant reviews, App Store ratings
- **Comments and discussions**: Reddit comments, YouTube video comments, blog post comments
- **Work activity**: GitHub commits, Jira ticket updates, Slack messages
- **Event logs**: User logins, page views, button clicks

What makes activity streams interesting in graph databases is how they connect to other entities. A post isn't just created by a user—it might mention other users, belong to a topic, include location data, link to external content, and receive reactions from other users. Each of these is a different relationship type in the graph.

Here's a query pattern you'll use constantly: "Show me recent posts from people I follow, about topics I care about, sorted by relevance." In a relational database, this requires joining user tables, follower tables, post tables, topic tables, and user interest tables—five or more joins. In a graph database, it's a simple pattern match that follows edges from you to people you follow to their recent posts that connect to your interest topics.

#### Diagram: Activity Stream Timeline Visualization

<details>
    <summary>Activity Stream Timeline Visualization</summary>
    Type: timeline

    Purpose: Show how activity streams work in a social network, with posts distributed over time and connected to creators, topics, and interactions

    Time period: Last 7 days (display by day)
    Orientation: Vertical timeline (top = most recent)

    Timeline items (sample data):

    Day 1 (Today):
    - 10:30 AM: Alice posted photo "Morning coffee ☕"
      * Tagged: Coffee, Photography
      * Reactions: 12 likes, 3 comments
      * Reach: 234 followers

    - 2:15 PM: Bob posted question "Best JavaScript frameworks in 2024?"
      * Tagged: Programming, Web Development
      * Reactions: 45 likes, 28 comments, 8 shares
      * Reach: 156 followers

    Day 2 (Yesterday):
    - 9:00 AM: Charlie posted tutorial "How to center a div (seriously)"
      * Tagged: CSS, Web Development, Humor
      * Reactions: 234 likes, 67 comments, 89 shares
      * Reach: 1,450 followers
      * Went viral: +2,340 indirect impressions

    - 4:30 PM: Alice commented on Charlie's tutorial
      * Comment: "The classic problem! Great explanation"
      * Reactions: 5 likes

    Day 3:
    - 1:00 PM: Dave posted code snippet "Python one-liner for sorting"
      * Tagged: Python, Programming Tips
      * Reactions: 34 likes, 12 comments
      * Reach: 567 followers

    Day 4:
    - 11:15 AM: Eve posted review "Amazing pizza at Luigi's! 🍕 5⭐"
      * Tagged: Food, Restaurant Reviews, New York
      * Reactions: 23 likes, 7 comments
      * Reach: 198 followers

    Day 5:
    - 3:45 PM: Bob shared Charlie's tutorial
      * Added comment: "This saved me hours of frustration!"
      * Reactions: 15 likes
      * Extended reach: +156 people

    Day 6:
    - 8:00 AM: Charlie posted poll "Which do you prefer: Tabs or Spaces?"
      * Tagged: Programming, Debates
      * Reactions: 456 votes, 89 comments, 34 shares
      * Reach: 1,450 followers

    Day 7:
    - 5:30 PM: Alice posted travel photo "Sunset in Santorini"
      * Tagged: Travel, Photography, Greece
      * Reactions: 89 likes, 12 comments
      * Reach: 234 followers

    Visual style:
    - Vertical timeline with date markers on left
    - Post cards showing: creator profile pic, content preview, tags, reaction counts
    - Color coding by content type:
      * Blue: Regular posts
      * Green: Questions
      * Purple: Tutorials/educational
      * Orange: Reviews
      * Pink: Shared content
    - Connection lines showing: Alice → Charlie (comment), Bob → Charlie (share)

    Interactive features:
    - Hover over post: Show full content and engagement metrics
    - Click post: Expand to show all comments and reactions with timestamps
    - Click user: Filter timeline to show only that user's activity
    - Click tag: Filter timeline to show posts with that tag
    - Slider at top: Adjust time window (last 24 hours, 7 days, 30 days)
    - Toggle: Show only posts from followed users vs. all posts

    Educational value:
    - Visualizes how content flows through time
    - Shows viral spread (Charlie's tutorial)
    - Demonstrates engagement patterns (comments, shares, likes)
    - Illustrates how shares extend reach
    - Shows clustering of topics (programming posts cluster together)

    Implementation: vis-timeline library with custom styling
    Canvas size: 1000x800px with scrollable content
    Default view: Shows last 7 days, scrollable to see older content
</details>

Activity streams also enable algorithmic ranking. Instead of showing posts in simple reverse-chronological order, modern social networks rank posts by predicted relevance using graph signals: Is the creator someone you interact with frequently? Do you engage with this topic often? Have your friends engaged with this post? These graph-based features feed machine learning models that personalize everyone's feed.

## Relationship Types: Not All Connections Are Equal

Real social networks are messy and multi-dimensional. The relationship between you and your mom is different from your relationship with your boss, which is different from your relationship with your favorite YouTuber, which is different from your relationship with your ex. Graph databases shine here because they support multiple relationship types between the same two nodes.

Instead of a single generic "connected to" relationship, graph databases let you model the actual nature of connections:

- **Family relationships**: PARENT_OF, CHILD_OF, SIBLING_OF, MARRIED_TO
- **Professional relationships**: WORKS_WITH, MANAGES, REPORTS_TO, COLLABORATES_WITH
- **Social relationships**: FRIENDS_WITH, FOLLOWS, BLOCKS, MUTED
- **Content relationships**: CREATED, COMMENTED_ON, LIKED, SHARED, BOOKMARKED
- **Affiliation relationships**: MEMBER_OF, MODERATOR_OF, OWNS, SUBSCRIBES_TO

The power of typed relationships is that you can query specific relationship patterns. "Show me people I work with who also share my interest in photography" is a query that combines professional and interest relationships. "Find experts on machine learning who are within 3 degrees of separation from me" traverses your network while filtering by expertise tags.

Relationship types can also have properties that add even more nuance:

| Relationship Type | Common Properties | Why They Matter |
|-------------------|-------------------|-----------------|
| FOLLOWS | followed_since, notification_setting, follow_reason | Track when connection started, how engaged user is |
| WORKS_WITH | start_date, end_date, role, department | Distinguish current and past colleagues |
| COMMENTED_ON | comment_text, timestamp, sentiment_score | Understand nature of engagement |
| MEMBER_OF | joined_date, membership_level, participation_score | Identify active vs. inactive members |
| TRUSTS | trust_level (1-10), endorsement_count | Model reputation networks |

#### Diagram: Multi-Relationship Network Graph Model

<details>
    <summary>Multi-Relationship Network Graph Model</summary>
    Type: graph-model

    Purpose: Demonstrate how the same people can have multiple different relationship types connecting them, creating a rich multi-dimensional social network

    Node types:
    1. Person (large circles with profile pictures/icons)
       - Properties: name, job_title, interests[], location
       - Example nodes:
         * "Sarah" (Software Engineer, interests: [coding, hiking, photography])
         * "Mike" (Product Manager, interests: [product design, running, cooking])
         * "Lisa" (UX Designer, interests: [design, photography, travel])
         * "James" (Data Scientist, interests: [ML, coding, gaming])
         * "Emma" (Marketing Lead, interests: [marketing, travel, food])

    2. Company (square nodes)
       - Properties: company_name, industry
       - Example: "TechCorp Inc." (Software)

    3. Interest Group (triangle nodes)
       - Properties: group_name, member_count
       - Examples: "Photography Club" (128 members), "Hiking Enthusiasts" (234 members)

    Edge types (color-coded):
    1. WORKS_WITH (solid blue arrows)
       - Properties: since_date, department, project
       - Examples:
         * Sarah WORKS_WITH Mike (since: 2022, dept: Product, project: "App Redesign")
         * Sarah WORKS_WITH James (since: 2023, dept: Engineering, project: "ML Features")
         * Mike WORKS_WITH Lisa (since: 2021, dept: Product)
         * Mike WORKS_WITH Emma (since: 2022, cross-dept collaboration)

    2. FRIENDS_WITH (solid green lines, undirected)
       - Properties: friends_since, friendship_strength (1-10)
       - Examples:
         * Sarah FRIENDS_WITH Lisa (since: 2020, strength: 9)
         * Mike FRIENDS_WITH Emma (since: 2019, strength: 8)
         * James FRIENDS_WITH Sarah (since: 2023, strength: 6)

    3. FOLLOWS (dashed purple arrows)
       - Properties: followed_since, notification_on (true/false)
       - Examples:
         * Lisa FOLLOWS Sarah (since: 2021, notifications: true)
         * Emma FOLLOWS Sarah (since: 2022, notifications: false)
         * James FOLLOWS Mike (since: 2023, notifications: true)

    4. SHARES_INTEREST (dotted orange lines)
       - Properties: common_interests[]
       - Examples:
         * Sarah SHARES_INTEREST Lisa [photography, travel]
         * Sarah SHARES_INTEREST James [coding]
         * Mike SHARES_INTEREST Emma [travel, food]

    5. MENTORS (thick gold arrows)
       - Properties: mentorship_since, focus_area
       - Examples:
         * Mike MENTORS Sarah (since: 2022, focus: "product thinking")
         * Sarah MENTORS James (since: 2023, focus: "software engineering")

    6. EMPLOYED_BY (gray arrows)
       - Properties: role, start_date
       - All five people EMPLOYED_BY "TechCorp Inc."

    7. MEMBER_OF (light blue arrows)
       - Properties: joined_date, participation_level
       - Examples:
         * Sarah MEMBER_OF "Photography Club" (joined: 2021, level: active)
         * Lisa MEMBER_OF "Photography Club" (joined: 2020, level: organizer)
         * Sarah MEMBER_OF "Hiking Enthusiasts" (joined: 2022, level: occasional)

    Sample complex query visualization:
    - When user clicks "Find mentors who share my interests":
      * Highlight Sarah (user)
      * Trace SHARES_INTEREST edges to find Lisa and James
      * Trace MENTORS edges to find potential mentors
      * Result: Mike mentors Sarah and shares interests indirectly through friendship
      * Show path: Sarah → FRIENDS_WITH → Lisa → SHARES_INTEREST (photography) → Sarah
                   Sarah → MENTORED_BY → Mike

    Layout: Force-directed with people nodes in center, company and groups on periphery

    Interactive features:
    - Hover over person: Show all their properties and relationships summary
    - Click person: Filter view to show only relationships involving that person
    - Hover over edge: Show relationship type and properties in tooltip
    - Click edge: Highlight all edges of that type in the graph
    - Filter panel:
      * Checkboxes to show/hide relationship types
      * "Show only professional" (WORKS_WITH, MENTORS, EMPLOYED_BY)
      * "Show only social" (FRIENDS_WITH, FOLLOWS, SHARES_INTEREST)
      * "Show only affiliations" (MEMBER_OF, EMPLOYED_BY)
    - Double-click person: Show expanded network (include their connections not visible)
    - Query builder: Allow user to construct graph patterns
      * Example: "Find people who WORKS_WITH me AND SHARES_INTEREST with me"

    Visual styling:
    - Person node size based on total number of connections
    - Edge thickness based on relationship strength/importance
    - Edge color: Blue (professional), Green (friendship), Purple (following), Orange (shared interest), Gold (mentorship), Gray (employment), Light blue (membership)
    - Animated highlight when hovering or selecting
    - Semi-transparent edges when filtered out

    Legend (always visible):
    - Relationship types with color coding
    - Node shapes (Circle: Person, Square: Company, Triangle: Group)
    - Edge styles (Solid: strong connection, Dashed: follow, Dotted: shared attribute)

    Educational value:
    - Shows same people connected in multiple ways
    - Demonstrates how different relationships serve different purposes
    - Illustrates multi-dimensional social graphs
    - Shows why graph databases excel at relationship-rich data

    Implementation: vis-network JavaScript library
    Canvas size: 1000x800px with zoom, pan, and filter controls
    Default state: All relationships visible, force-directed layout stabilized
</details>

The multi-relationship approach also solves privacy problems elegantly. You might want to share vacation photos with friends but not coworkers. In a graph database, you can traverse FRIENDS_WITH relationships but not WORKS_WITH relationships when deciding who sees personal posts. LinkedIn leverages this: your work history is visible to professional connections (WORKS_WITH) but maybe not to everyone who follows you.

## Influence Graphs: Measuring Who Matters

Not all users in a social network have equal impact. Some people have thousands of followers, high engagement rates, and content that gets shared widely. Others are casual users who rarely post. Influence graphs capture these dynamics by adding weight to connections and calculating centrality metrics.

Influence can be measured in various ways:

- **Follower count**: Raw number of people who see your content (reach)
- **Engagement rate**: Percentage of followers who like, comment, or share (quality vs. quantity)
- **Share cascades**: How often your content gets re-shared by others (virality)
- **Network position**: How central you are in the social graph (betweenness centrality)
- **PageRank**: The algorithm Google uses to rank web pages, adapted for social networks

PageRank is particularly interesting for social networks because it doesn't just count followers—it weights followers by their own importance. Having 100 followers who are themselves influencers is more valuable than having 1,000 followers who are inactive accounts. PageRank iteratively calculates importance by following the graph structure.

Graph databases can calculate influence metrics efficiently because they're optimized for traversing relationships. Finding someone's followers is a one-hop traversal. Finding followers-of-followers is a two-hop traversal. Calculating PageRank requires iterating over the entire graph multiple times, which graph databases handle well.

Influence graphs appear in unexpected places:

- **Academic citations**: Papers with many citations from highly-cited papers are more important
- **Code repositories**: GitHub repos with stars from active developers rank higher
- **Review platforms**: Reviews from verified, high-reputation reviewers carry more weight
- **Answer forums**: Stack Overflow karma reflects your influence in the developer community

#### Diagram: Influence Propagation MicroSim

<details>
    <summary>Influence Propagation MicroSim</summary>
    Type: microsim

    Learning objective: Visualize how influence spreads through a social network when an influencer posts content, and compare different propagation patterns

    Canvas layout (1200x800px):
    - Left side (850x800): Network visualization showing users and influence propagation
    - Right side (350x800): Control panel, metrics dashboard, and propagation statistics

    Visual elements in network view:
    - User nodes sized by follower count (larger = more followers)
    - Node colors indicate influence level:
      * Red (large): Influencers (1000+ followers)
      * Orange (medium): Mid-tier (100-999 followers)
      * Yellow (small): Regular users (10-99 followers)
      * Gray (tiny): Casual users (<10 followers)
    - Edges: FOLLOWS relationships shown as light gray arrows
    - When propagation runs: Nodes light up as content reaches them
    - Pulse animation shows content spreading through network

    Interactive controls:
    - Dropdown: "Select initial poster"
      * Random casual user
      * Random regular user
      * Random mid-tier user
      * Random influencer
      * [Specific user selection]
    - Slider: "Content quality" (1-10, affects share probability)
      * Low quality (1-3): 5% share rate
      * Medium quality (4-7): 15% share rate
      * High quality (8-10): 30% share rate
    - Slider: "Simulation speed" (50-2000ms per step)
    - Button: "Start Propagation"
    - Button: "Reset Network"
    - Button: "Generate New Network"
    - Checkbox: "Show engagement details"
    - Checkbox: "Highlight influencer paths"

    Network generation:
    - Total users: 100
    - Influencers: 3 (1000-5000 followers each)
    - Mid-tier: 15 (100-500 followers each)
    - Regular users: 32 (10-99 followers each)
    - Casual users: 50 (<10 followers each)
    - Follow pattern: Preferential attachment (popular users get more followers)
    - Influencers have higher engagement multiplier (2x share rate)

    Propagation algorithm:
    1. Initial poster creates content at time T=0
    2. All followers see content (immediate reach)
    3. Each follower decides whether to share based on:
       - Content quality (affects base share probability)
       - Their engagement level (random personality factor)
       - Whether they're an influencer (2x share rate)
    4. If they share, their followers see it (T=1, T=2, etc.)
    5. Track: unique reach, total impressions, shares, propagation depth

    Metrics dashboard (right panel):
    - Initial reach: [number] (direct followers)
    - Current total reach: [number] (unique users who saw it)
    - Total impressions: [number] (including duplicates)
    - Times shared: [number]
    - Propagation depth: [number] hops
    - Virality score: [calculated metric]
    - Engagement rate: [percentage]
    - Time elapsed: [seconds] in simulation

    Comparison table (shows after propagation completes):
    | Initial Poster Type | Avg Reach | Avg Shares | Avg Depth |
    |---------------------|-----------|------------|-----------|
    | Casual User         | 45        | 3          | 2.1       |
    | Regular User        | 178       | 12         | 3.4       |
    | Mid-tier User       | 634       | 45         | 4.8       |
    | Influencer          | 2,890     | 234        | 6.2       |

    Behavior:
    - On "Start Propagation":
      * Selected user node pulses (creates content)
      * Follower nodes light up green (saw content)
      * Some followers pulse and share (become orange briefly)
      * Their followers light up green
      * Animation continues until no more shares occur
    - Hover over any node during propagation: Show when they saw content, whether they shared, why they shared/didn't share
    - Click node: Show their influence metrics (followers, engagement rate, shares given)
    - "Highlight influencer paths": Show in bright yellow any propagation path that went through an influencer

    Visual feedback:
    - Green glow: User saw content
    - Orange pulse: User shared content
    - Yellow highlight: Influencer-mediated propagation
    - Edge thickness increases when content flows through that connection
    - Counter in corner shows current reach and shares in real-time

    Educational value:
    - Demonstrates network effects and viral spread
    - Shows why influencers are valuable (reach multiplication)
    - Illustrates that content quality matters (affects share rate)
    - Reveals how some content fizzles out vs. goes viral
    - Shows random variation (same conditions = different outcomes sometimes)
    - Demonstrates exponential growth in well-connected networks

    Implementation: p5.js with custom propagation simulation
    Physics: Use force-directed layout for positioning (or static hierarchical layout)
    Default state: Network pre-generated, ready for user to select poster and start
    Animation: Smooth transitions, clear visual feedback for each propagation step
</details>

Influence graphs raise interesting ethical questions. Should platforms amplify already-influential users (making the rich richer), or should they boost emerging voices? Should influence be calculated transparently, or is it a proprietary algorithm? These aren't just technical questions—they shape how information flows through society.

## Sentiment Analysis: Understanding the Emotional Network

Social networks aren't just about who connects to whom—they're about what people say and how others react. Sentiment analysis adds an emotional dimension to the social graph by analyzing whether posts, comments, and reviews express positive, negative, or neutral feelings.

In a graph database, sentiment can be stored as a property on content nodes or relationship edges. A review node might have a `sentiment_score` property ranging from -1 (very negative) to +1 (very positive). A COMMENTED_ON relationship might have a `comment_sentiment` property indicating whether the comment was supportive, critical, or neutral.

Why does sentiment matter in social graphs?

- **Product reviews**: Aggregate sentiment helps buyers decide ("4.5 stars but recent reviews are negative? Something changed.")
- **Brand monitoring**: Companies track sentiment about their products across social media
- **Content moderation**: Negative sentiment clusters might indicate harassment or toxic behavior
- **Political analysis**: Sentiment about candidates or policies reveals public opinion
- **Customer support**: Negative sentiment triggers escalation to human agents

Modern sentiment analysis uses Natural Language Processing (NLP) models that go beyond simple keyword matching. Instead of just looking for "good" or "bad" words, these models understand context, sarcasm, and subtle emotional cues. "This product is surprisingly decent" is mildly positive despite the word "surprisingly" often appearing in negative contexts.

Here's how sentiment analysis integrates with graph databases:

1. **Content creation**: User posts comment or review (node created)
2. **Sentiment extraction**: NLP model analyzes text, assigns sentiment score
3. **Property storage**: Score stored as property on content node
4. **Aggregation queries**: Calculate average sentiment for products, topics, users
5. **Trend detection**: Track sentiment changes over time ("product rating dropping")
6. **Network effects**: Positive content from influencers spreads more than negative content

#### Diagram: Sentiment Analysis Flow Workflow Diagram

<details>
    <summary>Sentiment Analysis Flow Workflow Diagram</summary>
    Type: workflow

    Purpose: Show how sentiment analysis integrates into a social network content pipeline, from user posting to moderation actions

    Visual style: Flowchart with process rectangles, decision diamonds, and data stores

    Steps:

    1. Start: "User Submits Post/Comment/Review"
       Hover text: "User types content and clicks submit button"
       Shape: Rounded rectangle (start/end)
       Color: Green

    2. Process: "Store Content Node in Graph"
       Hover text: "Create node with properties: content_text, timestamp, author_id, content_type"
       Shape: Rectangle
       Color: Light blue
       Details: Node created with initial properties, relationship created: User -[:CREATED]-> Content

    3. Process: "Send Text to NLP Sentiment Model"
       Hover text: "Call external API or local model (e.g., VADER, TextBlob, or transformer-based model)"
       Shape: Rectangle
       Color: Light blue
       Details: Text preprocessing: remove URLs, mentions, hashtags; Tokenization and embedding

    4. Process: "Calculate Sentiment Scores"
       Hover text: "Model returns: overall score (-1 to +1), confidence level, emotion tags (joy, anger, sadness, etc.)"
       Shape: Rectangle
       Color: Light blue
       Details: Returns JSON: {sentiment: 0.65, confidence: 0.89, emotions: ["joy", "excitement"]}

    5. Process: "Update Content Node with Sentiment Properties"
       Hover text: "Add properties: sentiment_score, sentiment_confidence, emotion_tags[], analyzed_timestamp"
       Shape: Rectangle
       Color: Light blue
       Details: Graph updated with sentiment metadata

    6. Decision: "Sentiment Highly Negative?"
       Hover text: "Check if sentiment_score < -0.7 AND confidence > 0.8"
       Shape: Diamond
       Color: Yellow
       Details: Threshold for flagging potentially harmful content

    7a. Process: "Flag for Moderation" (if YES to negative sentiment)
        Hover text: "Create FLAGGED_FOR_REVIEW relationship to ModQueue node, assign priority based on severity"
        Shape: Rectangle
        Color: Orange
        Details: Human moderator will review within 15 minutes

    7b. Process: "Publish Content" (if NO to negative sentiment)
        Hover text: "Make content visible to followers/network, trigger notification system"
        Shape: Rectangle
        Color: Green

    8. Process: "Update Aggregate Sentiment Metrics"
       Hover text: "If content is about a product/topic, update rolling average sentiment for that entity"
       Shape: Rectangle
       Color: Light blue
       Details: Product node gets updated: avg_sentiment, recent_sentiment_trend, total_reviews

    9. Process: "Check for Sentiment Trends"
       Hover text: "Detect sudden sentiment changes (e.g., product ratings dropping rapidly)"
       Shape: Rectangle
       Color: Light blue
       Details: Compare last 24h average vs. last 30d average

    10. Decision: "Significant Negative Trend?"
        Hover text: "Has average sentiment dropped >0.3 points in 24 hours?"
        Shape: Diamond
        Color: Yellow

    11a. Process: "Alert Brand/Product Team" (if YES to trend)
         Hover text: "Send notification to product owners about sentiment drop"
         Shape: Rectangle
         Color: Red
         Details: Dashboard alert created, email sent to stakeholders

    11b. Process: "Standard Analytics Update" (if NO to trend)
         Hover text: "Update dashboards and reports with latest sentiment data"
         Shape: Rectangle
         Color: Light blue

    12. End: "Content Published & Analyzed"
        Hover text: "Process complete, content live in network with sentiment metadata"
        Shape: Rounded rectangle (start/end)
        Color: Green

    Color coding:
    - Green: Start/end points and successful outcomes
    - Light blue: Standard processing steps
    - Yellow: Decision points
    - Orange: Warning/flagging actions
    - Red: Alert/escalation actions

    Swimlanes (horizontal lanes):
    - User Layer (top): User interaction
    - Application Layer: Content storage and processing
    - Analysis Layer: NLP and sentiment calculation
    - Moderation Layer: Flagging and review
    - Analytics Layer (bottom): Trend detection and reporting

    Annotations:
    - Arrow from "Calculate Sentiment Scores" pointing to external box: "External NLP API (OpenAI, Google Cloud NLP, or local model)"
    - Arrow from "Update Aggregate Metrics" pointing to data store icon: "Product/Topic nodes in graph database"
    - Dashed line around moderation steps (7a, 11a) with label: "Automated moderation pipeline"

    Implementation: Mermaid.js flowchart or Lucidchart-style diagram
    Size: 1000x1400px to accommodate vertical flow and multiple decision branches
</details>

Sentiment analysis becomes even more powerful when combined with graph structure. A product with mostly positive reviews but negative reviews from high-reputation reviewers might have quality issues that casual reviewers didn't notice. A political post with positive sentiment from your filter bubble but negative sentiment from outside your network might indicate polarization. Graph databases make these cross-dimensional analyses possible.

## Natural Language Processing: Making Sense of Unstructured Text

Sentiment is just one application of Natural Language Processing (NLP) in social networks. Modern NLP extracts structured information from unstructured text, turning messy human language into graph-friendly data. This bridges the gap between how humans communicate (long-form text) and how computers organize information (structured graphs).

Common NLP tasks in social networks include:

- **Entity extraction**: Identifying people, places, organizations, products mentioned in text
- **Topic modeling**: Determining what subjects a post discusses (sports, politics, technology, etc.)
- **Hashtag parsing**: Extracting and linking to topic nodes
- **Mention detection**: Finding @mentions and creating relationships between users
- **Link extraction**: Identifying URLs and creating relationships to external content
- **Spam detection**: Recognizing patterns in text that indicate spam or bot behavior
- **Content categorization**: Auto-tagging posts for better discovery and recommendations

Here's a powerful pattern: extract entities from text and create them as nodes in the graph. If someone posts "Just visited the Louvre in Paris, amazing experience!", NLP can extract:
- Location entity: "Louvre" (museum)
- Location entity: "Paris" (city)
- Sentiment: Positive
- Topic: Travel, Art

These become relationships in the graph: User -[:VISITED]-> Louvre -[:LOCATED_IN]-> Paris, with properties like timestamp and sentiment. Now you can query "show me people in my network who visited museums in Europe with positive sentiment"—a question that would be impossible without NLP extracting structure from unstructured text.

Modern social networks use NLP constantly:

| Platform | NLP Application | Graph Impact |
|----------|----------------|--------------|
| Twitter/X | Trending topics extraction | Creates TRENDING_NOW nodes, links to topic nodes |
| LinkedIn | Skills extraction from profiles | Creates SKILLED_IN relationships to skill nodes |
| YouTube | Auto-generated video tags | Creates TAGGED_WITH relationships to topic nodes |
| Facebook | Auto-tagging friends in photos | Creates TAGGED_IN relationships to user nodes |
| Reddit | Subreddit recommendation | Analyzes post content to suggest related communities |
| Instagram | Location tags and hashtags | Creates POSTED_FROM and TAGGED relationships |

#### Diagram: NLP Entity Extraction and Graph Building Diagram

<details>
    <summary>NLP Entity Extraction and Graph Building Diagram</summary>
    Type: diagram

    Purpose: Illustrate how NLP processes unstructured text from social media posts and extracts structured entities to add to the graph database

    Layout: Left-to-right pipeline showing transformation from raw text to graph structure

    STAGE 1 (Left): Raw User Post
    - Visual: Speech bubble or post card containing sample text:
      "Just had an amazing lunch at @JoePizza in Brooklyn! Best margherita pizza 🍕 in NYC. Highly recommend! #foodie #nycfood #pizza"
    - Label: "Raw Unstructured Text Input"
    - Color: Light gray background

    STAGE 2 (Center-left): NLP Processing
    - Visual: Flowchart box labeled "NLP Pipeline" with substeps:
      1. Tokenization: Break into words/tokens
      2. Named Entity Recognition (NER): Identify entities
      3. Sentiment Analysis: Determine emotional tone
      4. Hashtag/Mention Extraction: Find tags and references
      5. Category Classification: Determine topics
    - Color: Blue background
    - Arrows showing flow through each substep

    STAGE 3 (Center-right): Extracted Entities
    - Visual: List of structured data extracted:
      * Mentioned Business: "@JoePizza" → Entity: "Joe's Pizza" (Restaurant)
      * Location: "Brooklyn" → Entity: "Brooklyn, NY" (Place)
      * Location: "NYC" → Entity: "New York City" (City)
      * Product: "margherita pizza" → Entity: "Margherita Pizza" (Menu Item)
      * Sentiment: Positive (score: 0.92)
      * Topics: #foodie → "Food" topic
               #nycfood → "NYC Food" topic
               #pizza → "Pizza" topic
      * Recommendation: "Highly recommend" → Intent: RECOMMENDS
    - Color: Green background
    - Label: "Structured Entities & Metadata"

    STAGE 4 (Right): Graph Database Updates
    - Visual: Graph structure showing:

      Central node: User "Sarah"

      New relationships created:
      1. Sarah -[:POSTED]-> Post (content: "Just had amazing lunch...", timestamp: 2024-01-15, sentiment: 0.92)
      2. Post -[:MENTIONS]-> Restaurant "Joe's Pizza"
      3. Post -[:LOCATED_IN]-> Place "Brooklyn"
      4. Post -[:TAGGED_WITH]-> Topic "Food"
      5. Post -[:TAGGED_WITH]-> Topic "NYC Food"
      6. Post -[:TAGGED_WITH]-> Topic "Pizza"
      7. Sarah -[:RECOMMENDS]-> Restaurant "Joe's Pizza" (based_on_post: [post_id], sentiment: 0.92)
      8. Restaurant "Joe's Pizza" -[:LOCATED_IN]-> Place "Brooklyn"
      9. Brooklyn -[:PART_OF]-> City "New York City"

      New/updated nodes:
      - Restaurant node: "Joe's Pizza" (type: restaurant, cuisine: Italian, rating updates)
      - Place nodes: "Brooklyn", "New York City"
      - Topic nodes: "Food", "NYC Food", "Pizza"
      - Post node: (sentiment: 0.92, timestamp, content)

    - Color: Purple/pink background
    - Label: "Graph Database (Updated)"
    - Visual style: Network diagram with nodes and labeled edges

    CALLOUT BOX (Bottom):
    "Enabled Queries After Processing:"
    - "Find restaurants in Brooklyn recommended by people I follow"
    - "Show me posts about pizza with positive sentiment"
    - "Which NYC neighborhoods have the most food recommendations?"
    - "Find users who share my interest in Italian food"
    - "Alert Joe's Pizza to this positive mention"

    Visual style: Modern pipeline diagram with clear stages
    Color scheme: Gray → Blue → Green → Purple (showing progression)
    Include icons: Text icon, Brain icon (NLP), Database icon (graph)
    Arrows between stages: Bold, directional, labeled with data type

    Annotations:
    - Note on NLP stage: "Powered by models like spaCy, Stanford NER, or GPT"
    - Note on graph stage: "Automated relationship creation enables rich queries"
    - Highlight: "Same text → Multiple dimensions in graph"

    Implementation: Vector graphics (SVG) or diagramming tool
    Size: 1200x700px for clear horizontal flow
</details>

The combination of NLP and graphs creates powerful emergent properties. As more posts are analyzed, the graph learns patterns: certain hashtags cluster together, certain locations correlate with positive sentiment, certain users always mention the same topics. These patterns enable better recommendations, better search, and better content moderation—all because NLP transformed unstructured chaos into structured knowledge.

## Fake Account Detection: Fighting Bots with Graph Patterns

Social networks face a constant battle against fake accounts: bots, spam accounts, impersonators, and coordinated inauthentic behavior. Traditional detection methods check individual account characteristics (new account, no profile photo, etc.), but graph-based detection is far more powerful because it analyzes relationship patterns.

Real humans create organic social graphs with specific patterns:
- Friends tend to cluster (your friends know each other)
- Connections form gradually over time, not all at once
- Activity patterns vary (some days active, some days quiet)
- Content is diverse, not repetitive
- Interactions are reciprocal (people reply to you, you reply to them)

Fake accounts create different patterns:
- Many connections made simultaneously (bulk following)
- Connections are random, not clustered (follow anyone who follows back)
- Identical or near-identical posts across multiple accounts (coordinated behavior)
- One-way relationships (they follow thousands, few follow back)
- Amplification networks (bots like and share each other's content)

Graph databases excel at detecting these patterns because they can efficiently analyze network structure, not just node properties. Here are some graph-based detection signals:

**Clustering coefficient**: Measures how interconnected a user's friends are. Real people: 0.3-0.7 (some friends know each other). Bots: often near 0 (random connections) or near 1 (tight bot network).

**Follow ratio**: Following/Followers ratio. Real people: usually 0.5-2.0. Bots: often >10 (follow thousands, get few followers back).

**Account age vs. activity**: Real accounts gradually increase connections. Suspicious: brand new account with 1000 followers.

**Reciprocity rate**: Percentage of mutual relationships. Real people: 40-70%. Bots: often <10% (one-way follows).

**Content similarity**: Posting identical or near-identical content as other accounts. Strong signal of coordination.

**Amplification network detection**: Graph analysis can find clusters of accounts that always like/share each other's content—a sign of coordinated inauthentic behavior.

#### Diagram: Fake Account Detection Pattern MicroSim

<details>
    <summary>Fake Account Detection Pattern MicroSim</summary>
    Type: microsim

    Learning objective: Visualize different network patterns created by real users vs. fake accounts, and let students explore detection algorithms

    Canvas layout (1200x700px):
    - Left side (800x700): Network visualization showing users and connections
    - Right side (400x700): Detection controls, metrics, and results panel

    Visual elements:
    - User nodes colored by detection score:
      * Dark green: Definitely real (score: 0.9-1.0)
      * Light green: Probably real (score: 0.7-0.89)
      * Yellow: Suspicious (score: 0.4-0.69)
      * Orange: Likely fake (score: 0.2-0.39)
      * Red: Almost certainly fake (score: 0.0-0.19)
    - Node size based on follower count
    - Edges show FOLLOWS relationships (gray arrows)
    - When account selected, highlight its connections and show metrics

    Interactive controls:
    - Button: "Generate Mixed Network" (creates network with ~70% real, ~30% fake accounts)
    - Button: "Generate All Real Network" (comparison baseline)
    - Button: "Generate Bot Network" (extreme case)
    - Dropdown: "Detection Algorithm"
      * Clustering Coefficient Analysis
      * Follow Ratio Analysis
      * Account Age vs. Activity
      * Content Similarity Detection
      * Combined Score (default)
    - Button: "Run Detection"
    - Slider: "Suspicion Threshold" (0.0-1.0, default: 0.5)
      * Accounts below threshold flagged as suspicious
    - Checkbox: "Show only flagged accounts"
    - Checkbox: "Highlight bot networks"

    Network generation:

    Real accounts (70%):
    - Friends-of-friends connection pattern (clustering)
    - Account age: 180-1800 days (random distribution)
    - Follow ratio: 0.5-2.0 (balanced following/followers)
    - Follower count: 50-500 (log-normal distribution)
    - Following count: Similar to follower count (±30%)
    - Activity: Variable (10-100 posts, random intervals)
    - Content: Unique text for each post
    - Clustering coefficient: 0.3-0.7

    Fake accounts (30%):
    - Random connection pattern OR tight cluster (bot networks)
    - Account age: 1-60 days (recently created)
    - Follow ratio: 5-50 (following >> followers)
    - Follower count: 10-100 (low)
    - Following count: 500-5000 (very high)
    - Activity: High volume in short time (100 posts in 7 days)
    - Content: Repetitive or copied from other accounts
    - Clustering coefficient: <0.1 or >0.9 (extremes)

    Detection algorithms:

    1. Clustering Coefficient:
       - Calculate for each user: (# of connections between their friends) / (# possible connections)
       - Suspicion score = distance from normal range (0.3-0.7)
       - Display: "Clustering: 0.05 (SUSPICIOUS - random connections)"

    2. Follow Ratio:
       - Calculate: following_count / follower_count
       - Suspicion score: penalize ratio >3 or <0.3
       - Display: "Follow ratio: 12.5 (SUSPICIOUS - following many, few followers)"

    3. Account Age vs. Activity:
       - Calculate: posts_per_day = total_posts / account_age_days
       - Suspicion if: new account (<30 days) with high activity (>5 posts/day)
       - Display: "7 days old, 89 posts (SUSPICIOUS - abnormal activity)"

    4. Content Similarity:
       - Compare post content between accounts using simple text similarity
       - Flag accounts with >70% similar content to other accounts
       - Display: "83% content match with 4 other accounts (SUSPICIOUS - coordinated)"

    5. Combined Score:
       - Weighted average of all metrics
       - Weights: Clustering (25%), Follow Ratio (25%), Age/Activity (25%), Content (25%)
       - Display: "Overall suspicion: 0.82 (LIKELY FAKE)"

    Metrics panel (shown when account selected):
    - Account age: [X] days
    - Followers: [X]
    - Following: [X]
    - Follow ratio: [X]
    - Total posts: [X]
    - Posts per day: [X]
    - Clustering coefficient: [X]
    - Content uniqueness: [X]%
    - Suspicion score: [X]
    - Classification: REAL / SUSPICIOUS / LIKELY FAKE

    Results panel (after running detection):
    - Total accounts analyzed: [X]
    - Flagged as suspicious: [X] ([X]%)
    - True positives: [X] (correctly identified fakes)
    - False positives: [X] (real accounts flagged incorrectly)
    - Detection accuracy: [X]%
    - Precision: [X]%
    - Recall: [X]%

    Behavior:
    - On "Generate Mixed Network": Create graph with real and fake patterns
    - On "Run Detection": Calculate scores for all accounts, color nodes by score
    - Hover over node: Show quick metrics tooltip
    - Click node: Show detailed metrics panel
    - "Show only flagged": Hide green nodes, show only yellow/orange/red
    - "Highlight bot networks": If multiple fake accounts all follow each other, draw thick red border around that cluster

    Educational value:
    - Shows visually how bot networks have different structure than real networks
    - Demonstrates that no single metric catches all fakes (need combined approach)
    - Illustrates false positives (some real accounts look suspicious)
    - Shows how graph structure reveals patterns individual account properties miss
    - Students can experiment with different thresholds and see precision/recall trade-offs

    Special feature: "Bot Network Visualization"
    - When detected, draw red outline around clusters where accounts:
      * All created within 7 days of each other
      * All follow each other (>80% mutual follows within cluster)
      * Post similar content (>70% similarity)
      * Have similar follow patterns
    - Label: "Coordinated inauthentic behavior detected"

    Implementation: p5.js with force-directed graph layout
    Default state: Mixed network pre-generated, ready for detection to run
    Animation: When running detection, show score calculation progress, then color nodes based on results
</details>

Social networks combine multiple detection signals to calculate a "fake account probability" score. Accounts above a threshold get flagged for manual review or automatic restrictions. The beauty of graph-based detection is that it's harder to fake than individual account properties. Bots can add a profile photo and bio, but they can't easily create organic relationship patterns that evolve over years.

This cat-and-mouse game continues: bot creators try to mimic real patterns, and detection systems adapt using machine learning on graph features. The next frontier is detecting AI-generated content that's grammatically perfect and topically diverse, making content-based detection harder. Graph structure remains a robust signal.

## From Social to Professional: Human Resources Modeling

All the patterns we've explored—profiles, relationships, activity streams, influence, sentiment—apply beyond social media. Human Resources departments face remarkably similar challenges: tracking who knows whom, who has what skills, who influences whom, and how to assign tasks effectively. The graph patterns are identical, just with different labels.

Instead of friends and followers, HR deals with:
- **Org chart relationships**: REPORTS_TO, MANAGES, WORKS_WITH
- **Skill networks**: SKILLED_IN, REQUIRES_SKILL, ENDORSED_BY
- **Project relationships**: ASSIGNED_TO, COLLABORATES_ON, OWNS
- **Expertise networks**: EXPERT_IN, LEARNING, MENTORS

An organization is fundamentally a social network with formal structure added on top. The org chart is the official directed graph (employee REPORTS_TO manager), but the actual work network is far more complex and organic—people collaborate across departments, seek advice from unofficial mentors, and have expertise that doesn't match their job titles.

Graph databases excel at modeling both the formal and informal organization simultaneously. You can query "find someone with Python skills in the marketing department within 2 degrees of separation from me" (combining skill network, org chart, and social network in one query). Try that with separate HR systems for org charts, skill databases, and project assignments!

## Org Chart Models: Beyond the Hierarchy

Traditional org charts are trees: each employee has one manager, managers have one manager above them, up to the CEO at the root. But modern organizations are more complex. You might have a direct manager for performance reviews, a project lead for day-to-day work, and a mentor for career development. Graph databases handle this multi-dimensional reporting structure naturally.

Here's what an org chart graph model includes:

**Node types:**
- Employee (with properties: name, title, department, hire_date, employee_id)
- Department (with properties: name, cost_center, location)
- Team (with properties: team_name, project, start_date)
- Role (with properties: role_title, level, salary_band)

**Relationship types:**
- REPORTS_TO: Direct management chain (official hierarchy)
- MANAGES: Inverse of REPORTS_TO, useful for manager-focused queries
- MEMBER_OF: Department or team membership
- COLLABORATES_WITH: Cross-functional working relationships
- MENTORS: Informal development relationships
- HAS_ROLE: Current role assignment
- PREVIOUSLY_HELD: Historical roles (career progression)

#### Diagram: Multi-Dimensional Org Chart Graph Model

<details>
    <summary>Multi-Dimensional Org Chart Graph Model</summary>
    Type: graph-model

    Purpose: Show how modern organizations have multiple overlapping hierarchies (management reporting, project teams, mentorship) that are naturally represented in graph databases

    Node types:

    1. Employee (medium blue circles with initials)
       - Properties: name, employee_id, title, email, hire_date, location
       - Example nodes:
         * "Alice Chen" (VP Engineering, hire_date: 2018)
         * "Bob Martinez" (Senior Engineer, hire_date: 2020)
         * "Carol Johnson" (Engineering Manager, hire_date: 2019)
         * "David Kim" (Junior Engineer, hire_date: 2023)
         * "Eve Williams" (Product Manager, hire_date: 2021)
         * "Frank Thompson" (CTO, hire_date: 2017)
         * "Grace Lee" (HR Director, hire_date: 2019)

    2. Department (large purple squares)
       - Properties: dept_name, budget, headcount
       - Example nodes: "Engineering", "Product", "HR"

    3. Project (green hexagons)
       - Properties: project_name, status, deadline
       - Example nodes: "Mobile App Redesign", "API v2.0", "Q4 Infrastructure"

    4. Team (orange rounded rectangles)
       - Properties: team_name, focus_area
       - Example nodes: "Backend Team", "Frontend Team", "Platform Team"

    5. Skill (small yellow triangles)
       - Properties: skill_name, category
       - Example nodes: "Python", "Leadership", "System Design", "React"

    Edge types:

    1. REPORTS_TO (solid thick blue arrows, hierarchical)
       - Properties: since_date, reporting_type (direct/dotted-line)
       - Management hierarchy:
         * Alice → Frank (VP Engineering → CTO)
         * Carol → Alice (Eng Manager → VP Engineering)
         * Bob → Carol (Senior Eng → Eng Manager)
         * David → Carol (Junior Eng → Eng Manager)
         * Eve → Alice (Product Manager → VP Engineering, dotted-line)
         * Grace → Frank (HR Director → CTO)

    2. MEMBER_OF (solid purple arrows to departments)
       - Properties: since_date, allocation_percentage
       - Examples:
         * Alice, Carol, Bob, David → Engineering (100%)
         * Eve → Product (100%)
         * Grace → HR (100%)
         * Frank → Executive (100%)

    3. ASSIGNED_TO (dashed green arrows to projects)
       - Properties: role_on_project, allocation_percentage, start_date
       - Examples:
         * Bob ASSIGNED_TO "API v2.0" (Tech Lead, 80%)
         * David ASSIGNED_TO "API v2.0" (Developer, 100%)
         * Eve ASSIGNED_TO "API v2.0" (Product Owner, 50%)
         * Carol ASSIGNED_TO "Mobile App Redesign" (Engineering Lead, 40%)

    4. BELONGS_TO (solid orange arrows to teams)
       - Properties: team_role, since_date
       - Examples:
         * Bob BELONGS_TO "Backend Team" (Senior Member)
         * David BELONGS_TO "Backend Team" (Member)
         * Carol BELONGS_TO "Backend Team" (Team Lead)

    5. MENTORS (dotted gold arrows, employee to employee)
       - Properties: mentorship_since, focus_areas[], meeting_frequency
       - Examples:
         * Alice MENTORS Eve (since: 2021, focus: [leadership, product strategy])
         * Carol MENTORS David (since: 2023, focus: [technical skills, code review])
         * Frank MENTORS Alice (since: 2019, focus: [executive leadership])

    6. COLLABORATES_WITH (light blue undirected lines)
       - Properties: projects_together[], interaction_frequency
       - Examples:
         * Bob ↔ Eve (projects: ["API v2.0"], frequency: daily)
         * Bob ↔ David (projects: ["API v2.0"], frequency: daily)
         * Carol ↔ Alice (projects: ["Mobile App"], frequency: weekly)

    7. SKILLED_IN (thin yellow arrows to skills)
       - Properties: proficiency_level (1-10), years_experience, certified
       - Examples:
         * Bob SKILLED_IN "Python" (proficiency: 9, years: 8)
         * Bob SKILLED_IN "System Design" (proficiency: 8, years: 6)
         * David SKILLED_IN "Python" (proficiency: 5, years: 1)
         * Eve SKILLED_IN "Product Strategy" (proficiency: 8, years: 4)
         * Alice SKILLED_IN "Leadership" (proficiency: 9, years: 12)

    Sample data focus: Bob Martinez (Senior Engineer)
    - Reports to: Carol (Manager)
    - Department: Engineering
    - Project: API v2.0 (Tech Lead, 80% time)
    - Team: Backend Team (Senior Member)
    - Skills: Python (9/10), System Design (8/10), React (6/10)
    - Collaborates with: Eve (Product Manager on API v2.0), David (mentoring relationship)
    - Career path visible: Junior Eng (2020) → Mid-level Eng (2021) → Senior Eng (2023)

    Layout: Hierarchical layout for management chain (top-down), with additional layers showing:
    - Top: CTO (Frank)
    - Second level: VP Engineering (Alice), HR Director (Grace)
    - Third level: Engineering Manager (Carol), Product Manager (Eve - dotted line to Alice)
    - Bottom: Engineers (Bob, David)
    - Side clusters: Projects (connected to assigned employees)
    - Side clusters: Skills (connected to skilled employees)

    Interactive features:
    - Hover over employee: Show summary (name, title, manager, department, current projects)
    - Click employee: Highlight all their relationships (reports, projects, skills, collaborations, mentorships)
    - Double-click employee: Show "People finder" - find paths to other employees
    - Hover over project: Show all assigned employees and their roles
    - Click skill: Highlight all employees with that skill, color by proficiency level
    - Filter controls:
      * "Show only management chain" (REPORTS_TO relationships only)
      * "Show only project teams" (ASSIGNED_TO relationships only)
      * "Show collaboration network" (COLLABORATES_WITH only)
      * "Show mentorship network" (MENTORS only)
      * "Show skill network" (SKILLED_IN only)
    - Search: Find employee by name, skill, or project
    - Query builder:
      * "Find Python experts in Engineering department"
      * "Show reporting chain from David to Frank"
      * "Find who Bob collaborates with regularly"
      * "Show all people on API v2.0 project"

    Visual styling:
    - Employee node size based on org level (larger = more senior)
    - REPORTS_TO edges thicker and darker (emphasize hierarchy)
    - MENTORS edges gold and dotted (warm, supportive relationship)
    - ASSIGNED_TO edges dashed green (temporary project assignments)
    - Color coding: Blue (org structure), Green (projects), Orange (teams), Yellow (skills), Gold (mentorship)
    - Highlight path when showing relationships between two people

    Legend (always visible):
    - Node shapes: Circle (Employee), Square (Department), Hexagon (Project), Rounded rect (Team), Triangle (Skill)
    - Edge types: Solid thick (reports), Solid thin (membership), Dashed (project), Dotted (mentorship), Undirected (collaboration)
    - Color meanings for each relationship type

    Educational value:
    - Shows organizations are multi-dimensional, not just hierarchical trees
    - Demonstrates how graph databases handle multiple simultaneous relationship types
    - Illustrates informal networks (mentorship, collaboration) vs. formal (reporting)
    - Shows how skills and projects cross organizational boundaries
    - Demonstrates complex HR queries that would require many table joins in RDBMS

    Implementation: vis-network JavaScript library with hierarchical layout option
    Canvas size: 1200x900px with zoom, pan, and extensive filter controls
    Default state: Show all relationship types, hierarchical layout centered on CTO
</details>

The power of the graph model is you can traverse multiple relationship types in a single query. "Find all engineers who report to someone I've worked with on a project, who have Python skills, and are not currently assigned to a project" combines:
- Social network (people I've worked with)
- Org chart (who reports to them)
- Skill network (Python filter)
- Project network (current availability)

This is the kind of query that would be a nightmare in traditional HR systems with separate databases for org charts, skills, and project assignments. In a graph database, it's elegant and fast.

## Skill Management: Connecting People to Expertise

Organizations need to know who can do what. Traditional HR systems have employees select skills from a dropdown menu during annual reviews, resulting in stale, self-reported data that's often inaccurate. Graph-based skill management is far more dynamic and trustworthy.

In a skill graph:
- Skills are nodes (Python, Project Management, Customer Service, etc.)
- Employees are nodes
- Relationships include: SKILLED_IN, LEARNING, WANTS_TO_LEARN, ENDORSED_BY, TAUGHT

The ENDORSED_BY relationship is particularly powerful. Like LinkedIn's skill endorsements, colleagues can endorse your skills, creating social proof. "Bob says you're good at Python" is more credible than you just claiming it yourself. Endorsements from senior engineers or people you've worked with on projects carry even more weight.

Skill graphs enable sophisticated queries:

- **Find experts**: "Show me the top 3 Python experts in the company (by endorsement count and years of experience)"
- **Find teachers**: "Who can teach React to our new hires? (people with high React proficiency who have the TEACHES relationship)"
- **Succession planning**: "If Alice leaves, who could take over her responsibilities? (people with overlapping skill sets)"
- **Team assembly**: "Build a team for a mobile app project (need: Swift, UI design, backend API, project management)"
- **Gap analysis**: "What skills do we need for our AI initiative that we don't currently have in-house?"
- **Learning paths**: "What skills should I learn next to move from Junior to Senior Engineer? (analyze skill patterns of current Senior Engineers)"

Skills can also have attributes like proficiency level (1-10), years of experience, certifications earned, and last used date. This turns "Alice knows Python" into "Alice has 8/10 proficiency in Python with 5 years of experience, last used 2 months ago, with AWS Python certification."

Modern organizations increasingly use skill graphs for talent mobility: instead of posting jobs and waiting for applications, they query the skill graph to find people who already have 80% of the required skills and might be interested in growing into the role. This makes career development more proactive and data-driven.

## Task Assignment: Optimizing Project Workflows

The final piece of the social network puzzle is task assignment: matching work to people based on skills, availability, interests, and relationships. This is where all the patterns we've explored come together into a practical application.

Task assignment graphs connect:
- **Tasks** (nodes with properties: description, required_skills[], estimated_hours, priority, deadline)
- **People** (employees with skills, availability, workload)
- **Projects** (collections of tasks)
- **Teams** (groups working together)

The assignment process is a graph matching problem:
1. Task requires skills [Python, API design, testing]
2. Query graph for people with those skills who aren't overloaded
3. Consider preferences (who wants to work on backend projects?)
4. Consider relationships (who has worked together successfully before?)
5. Create ASSIGNED_TO relationship between person and task

#### Diagram: Task Assignment Optimization Workflow

<details>
    <summary>Task Assignment Optimization Workflow</summary>
    Type: workflow

    Purpose: Show how task assignment in project management systems uses graph databases to match tasks with team members based on skills, availability, preferences, and team dynamics

    Visual style: Swimlane flowchart with decision points and optimization steps

    Swimlanes:
    - Project Manager (top)
    - Assignment System (middle - main process flow)
    - Graph Database (queries and analysis)
    - Team Members (bottom - notifications)

    Process Flow:

    1. Start: "New Task Created" (Project Manager lane)
       Hover text: "PM creates task: 'Implement user authentication API', priority: high, deadline: 2 weeks"
       Shape: Rounded rectangle
       Color: Green

    2. Process: "Extract Task Requirements" (Assignment System)
       Hover text: "Parse task description, identify required skills, estimate effort hours"
       Details:
         - Required skills: [Python, API design, Security, Testing]
         - Estimated hours: 40
         - Priority: High
         - Deadline: 14 days

    3. Process: "Query Skill Graph" (Graph Database)
       Hover text: "MATCH (person:Employee)-[s:SKILLED_IN]->(skill:Skill) WHERE skill.name IN ['Python', 'API design', 'Security', 'Testing'] RETURN person, skill, s.proficiency"
       Details: Returns candidates with skill matches and proficiency levels

    4. Process: "Check Availability" (Graph Database)
       Hover text: "MATCH (person)-[:ASSIGNED_TO]->(task) RETURN person, SUM(task.remaining_hours) as current_workload"
       Details: Calculate current workload for each candidate

    5. Process: "Calculate Match Scores" (Assignment System)
       Hover text: "Score each candidate based on: skill match (40%), availability (30%), past performance (20%), preferences (10%)"
       Details:
         - Skill match: How many required skills they have, at what proficiency
         - Availability: Current workload vs capacity (40h/week)
         - Past performance: Success rate on similar tasks
         - Preferences: Interest in this type of work

    6. Decision: "Clear Best Match?" (Assignment System)
       Hover text: "Is there one candidate with score >0.85 and available capacity?"
       Shape: Diamond
       Color: Yellow

    7a. Process: "Auto-Assign to Best Match" (if YES)
        Hover text: "Create ASSIGNED_TO relationship, update task status, send notification"
        Color: Green

    7b. Process: "Generate Candidate List" (if NO - tie or no clear winner)
        Hover text: "Create ranked list of top 3-5 candidates with scores and reasoning"
        Color: Orange

    8b. Process: "Present Options to PM" (Assignment System → Project Manager)
        Hover text: "Show: Candidate A (score: 0.78, available next week), Candidate B (score: 0.75, available now but less experience), etc."

    9b. Decision: "PM Selects Candidate" (Project Manager)
        Hover text: "PM reviews options and makes final choice based on strategic considerations"

    10. Process: "Create Assignment" (Assignment System)
        Hover text: "Create ASSIGNED_TO relationship in graph database"
        Details:
          - Edge properties: assigned_date, estimated_hours, priority, deadline
          - Update person's workload
          - Update task status to 'assigned'

    11. Process: "Update Team Network" (Graph Database)
        Hover text: "Strengthen COLLABORATES_WITH relationships between assigned person and project team members"
        Details: Increment collaboration counter, update last_collaboration_date

    12. Process: "Check Team Balance" (Assignment System)
        Hover text: "Analyze workload distribution across team to prevent burnout and ensure fairness"
        Metrics:
          - Workload variance across team
          - Skills being utilized vs. sitting idle
          - New vs. routine work distribution

    13. Decision: "Team Imbalanced?" (Assignment System)
        Hover text: "Is anyone >120% capacity or >50% team idle?"
        Shape: Diamond

    14a. Process: "Suggest Rebalancing" (if YES to imbalance)
         Hover text: "Generate suggestions: 'Consider moving Task X from Bob to Carol to balance workload'"
         Color: Orange

    14b. Process: "Continue Monitoring" (if NO to imbalance)
         Color: Green

    15. Process: "Notify Assigned Person" (Team Members lane)
        Hover text: "Send notification: 'You've been assigned to task: Implement user auth API, deadline: Nov 1'"
        Details: Include context, required skills, related team members, priority

    16. Process: "Log Assignment for Learning" (Graph Database)
        Hover text: "Record assignment for future analysis of assignment patterns and outcomes"
        Details: Used to improve matching algorithm over time

    17. End: "Task Assigned & Tracked" (Assignment System)
        Hover text: "Task actively assigned, progress tracking begins"
        Shape: Rounded rectangle
        Color: Green

    PARALLEL PROCESS (runs continuously):
    - "Monitor Task Progress" → "Update Skill Proficiency Based on Performance"
    - Hover text: "As tasks complete, update person's skill proficiency and track success/failure patterns"

    Annotations:

    - Arrow from "Calculate Match Scores" to callout box:
      "Scoring Formula Example:
       Score = (skill_match × 0.4) + (availability × 0.3) + (past_performance × 0.2) + (interest × 0.1)

       Candidate Alice:
       - Skills: Python (9/10), API (8/10), Security (7/10), Testing (6/10) → 0.90
       - Availability: 10h/40h used this week → 0.75
       - Past performance: 8/10 similar tasks succeeded → 0.80
       - Interest: Expressed interest in security work → 0.90
       TOTAL: (0.90×0.4) + (0.75×0.3) + (0.80×0.2) + (0.90×0.1) = 0.845"

    - Arrow from "Check Team Balance" to metrics dashboard:
      "Team Workload Dashboard:
       Alice: 35h (88% capacity) ✓
       Bob: 52h (130% capacity) ⚠️ OVERLOADED
       Carol: 18h (45% capacity) ✓
       David: 40h (100% capacity) ✓
       → Suggestion: Reassign 12h from Bob to Carol"

    Color coding:
    - Green: Successful completion, optimal state
    - Yellow: Decision points
    - Orange: Manual intervention needed, warnings
    - Blue: Graph database operations
    - Purple: Notifications and communication

    Visual elements:
    - Graph database icon next to query boxes
    - Person icons in Team Members lane
    - Calendar icon for deadline checks
    - Scale/balance icon for workload balancing
    - Bell icon for notifications

    Implementation: Flowchart with swimlanes (BPMN style)
    Size: 1400x1000px to accommodate detailed workflow and annotations
</details>

Good task assignment systems also learn from history. If Alice and Bob have successfully collaborated on 5 previous projects, the system might prioritize assigning them to work together again. If Carol struggled with a backend task last quarter, maybe don't assign her to another backend task until she's completed some training.

The graph also reveals patterns like: "Data science tasks take 30% longer when assigned to people outside the data science team" or "urgent bugs get fixed faster when assigned to the person who originally wrote that code (found via AUTHORED relationship)."

## Backlog Management: Prioritizing the Work Queue

Every development team has a backlog: a list of tasks, features, and bugs waiting to be addressed. Traditional backlogs are flat lists sorted by priority, but graph-based backlog management captures the rich dependencies and relationships between tasks.

Tasks can have relationships like:
- DEPENDS_ON: Task B can't start until Task A is complete
- BLOCKS: Task A is blocking Task B (inverse of DEPENDS_ON)
- RELATED_TO: Tasks share common themes or components
- DUPLICATES: Tasks are essentially the same work
- SUBTASK_OF: Task hierarchy for breaking down large features

With these relationships, the graph reveals:
- **Critical path**: Which tasks block the most other work?
- **Parallel work**: Which tasks can be done simultaneously?
- **Bottlenecks**: Which task dependencies create waiting time?
- **Orphaned tasks**: Which tasks have no dependencies and could be done anytime?
- **Impact radius**: If we do this task, how many blocked tasks become unblocked?

Graph visualization makes backlog prioritization much clearer. Instead of staring at a flat list of 200 tasks wondering what to do first, you see a network diagram showing that fixing bug #423 would unblock 15 other tasks, making it high-priority even though it seemed minor in isolation.

Modern backlog management also incorporates:
- User story relationships (epic → feature → task)
- Skill requirements (to suggest who should work on what)
- Customer impact (which features affect the most users)
- Technical debt tracking (which components are fragile and need refactoring)

All of this is naturally modeled in a graph, where nodes are tasks and edges are dependencies, relationships, and impacts.

## Putting It All Together: The Social Graph Powers Everything

We started this chapter talking about Instagram and X, but by now you've seen that social network patterns appear everywhere:
- Product review platforms (users, reviews, products, reputation)
- GitHub (developers, repositories, commits, stars, followers)
- HR systems (employees, skills, projects, org charts)
- Project management (tasks, assignments, dependencies, teams)
- Content platforms (creators, content, comments, likes, shares)

The common thread is **people connected by relationships, creating content, building reputation, and influencing others**. Graph databases excel at modeling these patterns because they mirror how humans naturally think about social connections.

When you're building any system where people interact, consider these questions:
- What types of users exist in my system?
- How do they connect to each other?
- What content do they create?
- How do others react to that content?
- How is reputation and trust established?
- How do I detect bad actors or fake accounts?
- How do I make good recommendations?

If you can answer these questions by drawing nodes and edges, you're thinking in graphs—and you're ready to build modern social systems that scale gracefully and query efficiently.

The things you learned in this chapter apply to any system where reputation matters, where people comment on things, where social proof influences decisions, where expertise needs to be found, or where relationships drive value. That's not just social media—that's most of the modern digital world.

Welcome to seeing social networks everywhere. You're welcome (or sorry, depending on your perspective).
