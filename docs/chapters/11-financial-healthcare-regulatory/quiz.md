# Quiz: Financial, Healthcare, and Regulatory Applications

Test your understanding of graph database applications in highly regulated industries including fraud detection, anti-money laundering, healthcare modeling, clinical pathways, regulatory compliance, and data governance.

---

#### 1. Why are financial institutions among the largest consumers of graph database technology?

<div class="upper-alpha" markdown>
1. Graphs are cheaper
2. Graph databases excel at real-time fraud detection, AML compliance, and risk analysis by analyzing transaction network patterns in milliseconds
3. Banks like new technology
4. Graphs are only for social networks
</div>

??? question "Show Answer"
    The correct answer is **B**. Financial institutions use graph databases for mission-critical fraud detection and anti-money laundering because graphs can analyze complex transaction networks in real-time (milliseconds). When you swipe your credit card, graph algorithms examine your behavioral patterns, network connections, merchant risk, and historical fraud patterns across tens of thousands of rules in ~250ms to decide if the transaction is legitimate. This real-time network analysis at scale is what makes graphs indispensable for financial applications.

    **Concept Tested:** Financial Transactions, Fraud Detection

    **See:** [Financial Applications](index.md#financial-applications-following-the-money)

---

#### 2. What pattern does anti-money laundering (AML) detection look for in transaction graphs?

<div class="upper-alpha" markdown>
1. Large single transactions only
2. Complex patterns like circular money flows, layering chains, smurfing (multiple small deposits), and fan-out/fan-in structures
3. Random transactions
4. AML doesn't use patterns
</div>

??? question "Show Answer"
    The correct answer is **B**. AML systems use graph pattern detection to identify money laundering indicators: circular flows (money returning to origin through intermediaries), layering chains (money moving through multiple accounts to obscure origin), smurfing/structuring (many small deposits just below reporting thresholds converging to one account), and fan-out/fan-in patterns (rapid distribution or collection of funds). These network patterns are nearly impossible to detect in relational databases but become graph traversal queries in graph databases.

    **Concept Tested:** Anti-Money Laundering

    **See:** [Anti-Money Laundering](index.md#anti-money-laundering-finding-hidden-patterns)

---

#### 3. What is synthetic identity fraud and how do graphs detect it?

<div class="upper-alpha" markdown>
1. Using fake IDs at stores
2. Creating fake identities by combining real SSNs with fabricated information, detected by finding suspicious connections like shared addresses/devices with known fraudsters
3. Identity theft of existing people
4. Graphs cannot detect synthetic identities
</div>

??? question "Show Answer"
    The correct answer is **B**. Synthetic identity fraud involves creating fake people by mixing real SSNs (often from children or elderly) with fake names and addresses. Traditional fraud systems check each application in isolation and miss these. Graph-based systems detect synthetic identities by analyzing the network: this "new customer" shares an address with a known fraudster, uses the same device as 10 other suspicious accounts, and the SSN belongs to an 8-year-old but the application claims age 42. These connection patterns reveal the fraud.

    **Concept Tested:** Account Networks, Fraud Detection

    **See:** [Fraud Detection](index.md#fraud-detection-250-milliseconds-to-decide)

---

#### 4. What does KYC (Know Your Customer) compliance require and why do graphs help?

<div class="upper-alpha" markdown>
1. Knowing customer birthdays
2. Verifying customer identities and tracing relationships to beneficial owners, politically exposed persons, and sanctioned entities through network traversals
3. Storing customer names
4. KYC doesn't apply to graphs
</div>

??? question "Show Answer"
    The correct answer is **B**. KYC regulations require financial institutions to verify customer identities, assess risk levels, and understand beneficial ownership structures (who ultimately controls an account or company). Graphs excel at this because risk depends on relationships: this customer is a beneficial owner of 5 shell companies, related to a politically exposed person (PEP), has an address in a high-risk jurisdiction, and shares a phone number with a sanctioned entity. Graph traversals make these multi-hop relationship analyses efficient and comprehensive.

    **Concept Tested:** Know Your Customer

    **See:** [Know Your Customer](index.md#know-your-customer-identity-and-due-diligence)

---

#### 5. How do provider-patient graphs improve healthcare delivery?

<div class="upper-alpha" markdown>
1. By replacing doctors
2. By modeling relationships between providers, patients, diagnoses, and treatments to enable coordinated care analysis and fraud detection
3. Graphs don't apply to healthcare
4. By scheduling appointments only
</div>

??? question "Show Answer"
    The correct answer is **B**. Provider-patient graphs model the healthcare ecosystem: patients treated by multiple providers, providers with specialties, diagnoses requiring specific treatments, medications interacting with each other. This enables care coordination analysis (are this patient's cardiologist and endocrinologist communicating?), fraud detection (this provider sees patients 15 times per month—excessive billing?), and quality improvement (which provider practice patterns correlate with better outcomes?). The graph structure reveals patterns invisible in isolated EHR records.

    **Concept Tested:** Provider-Patient Graphs, Healthcare Graphs

    **See:** [Provider-Patient Graphs](index.md#provider-patient-graphs-understanding-care-networks)

---

#### 6. What are clinical pathways and how do they enable value-based care?

<div class="upper-alpha" markdown>
1. Hospital hallways
2. Standardized evidence-based care sequences modeled as graphs, enabling outcome analysis to identify which treatment paths achieve best results at lowest cost
3. Billing codes
4. Patient transportation routes
</div>

??? question "Show Answer"
    The correct answer is **B**. Clinical pathways are standardized care sequences for specific conditions, represented as graphs: diagnosis leads to tests, test results lead to treatment decisions, treatments lead to outcomes. By modeling actual patient journeys through these pathways and tracking outcomes, healthcare systems can identify which paths produce the best results at the lowest cost—the core of value-based care. For example, comparing different diabetes management pathways to find which achieves best HbA1c control with fewest complications and lowest cost.

    **Concept Tested:** Clinical Pathways

    **See:** [Clinical Pathways](index.md#clinical-pathways-mapping-the-journey)

---

#### 7. Given a requirement to detect a money laundering ring moving $2M through 8 shell companies, which graph approach would you use?

<div class="upper-alpha" markdown>
1. Simple text search
2. Graph traversal to find cycles, layering chains, and fan-out patterns connecting accounts to the same beneficial owners, combined with volume analysis
3. Random sampling
4. Manual review only
</div>

??? question "Show Answer"
    The correct answer is **B**. Detecting money laundering rings requires combining multiple graph analyses: cycle detection (money returning to source), community detection (identifying clusters of accounts controlled by same entities), fan-out/fan-in pattern matching (rapid distribution/collection), and beneficial ownership traversal (all shell companies trace to same ultimate owner). Graph queries can find these patterns across millions of transactions, flagging the suspicious network for investigation. Volume thresholds alone miss the network structure that proves criminal intent.

    **Concept Tested:** Anti-Money Laundering, Fraud Detection

    **See:** [AML Patterns](index.md#anti-money-laundering-finding-hidden-patterns)

---

#### 8. What is data lineage and why is it critical for regulatory compliance?

<div class="upper-alpha" markdown>
1. Database age
2. Tracking data's complete journey from source through transformations to consumption, providing auditability and proving data accuracy for regulators
3. Deleting old data
4. Data storage location only
</div>

??? question "Show Answer"
    The correct answer is **B**. Data lineage traces the complete lifecycle of data: where it originated, how it was transformed, where it was used, and who accessed it. This is critical for regulatory compliance because regulators (SOX, GDPR, HIPAA) require proving data accuracy, proper handling, and authorized access. Graph-based lineage models data flow as edges: Source → Extract → Transform → Load → Aggregate → Report → User. When a regulatory report is questioned, lineage graphs provide instant traceable proof of data provenance and transformations.

    **Concept Tested:** Data Lineage

    **See:** [Data Lineage](index.md#data-lineage-tracking-datas-journey)

---

#### 9. How does master data management (MDM) use graphs for entity resolution?

<div class="upper-alpha" markdown>
1. MDM doesn't use graphs
2. By finding records that share similar attributes or connections (same address, phone, device) and consolidating them into golden records
3. By randomly merging records
4. By deleting duplicate data
</div>

??? question "Show Answer"
    The correct answer is **B**. Master Data Management creates authoritative "golden records" by identifying that different records represent the same entity. Graphs excel at entity resolution because they analyze relationships and similarities: "John Smith" at 123 Main, "J. Smith" at 123 Main St, and "Jon Smith" with phone 555-1234 at that address are probably the same person. Graph algorithms compute similarity scores, cluster probable matches, and create master records with source records linked for traceability. This relationship-based matching is far more accurate than simple name matching.

    **Concept Tested:** Master Data Management

    **See:** [Master Data Management](index.md#master-data-management-one-source-of-truth)

---

#### 10. Why is healthcare described as having graph-like data despite low current adoption of graph databases?

<div class="upper-alpha" markdown>
1. Healthcare data isn't graph-like
2. Clinical data involves complex relationships between patients, diagnoses, medications, procedures, providers, and outcomes that graphs naturally model
3. Healthcare only uses documents
4. Graphs don't work for medical data
</div>

??? question "Show Answer"
    The correct answer is **B**. Healthcare data is inherently graph-structured: a patient has multiple diagnoses, each diagnosis suggests possible treatments, medications interact with each other, procedures are performed by providers with specific specialties, outcomes depend on the combination of all these factors. Yet most healthcare systems use document-centric EHRs and fragmented relational databases. The opportunity for graphs in healthcare is enormous—enabling medication interaction checking, clinical decision support, outcome prediction, and value-based care optimization—but adoption lags behind finance.

    **Concept Tested:** Healthcare Graphs, Electronic Health Records

    **See:** [Healthcare Applications](index.md#healthcare-applications-connecting-care)

---

**Quiz Complete!**

**Questions:** 10
**Cognitive Levels:** Remember (2), Understand (4), Apply (2), Analyze (2)
**Concepts Covered:** Financial Transactions, Fraud Detection, Anti-Money Laundering, Know Your Customer, Account Networks, Healthcare Graphs, Provider-Patient Graphs, Electronic Health Records, Clinical Pathways, Regulatory Compliance, Data Lineage, Master Data Management

**Next Steps:**
- Review [Chapter Content](index.md) for financial and healthcare applications
- Practice designing compliance and healthcare graphs
- Continue to [Chapter 12: Advanced Topics and Distributed Systems](../12-advanced-topics-distributed-systems/index.md)
