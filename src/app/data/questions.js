export const awsQuestions = [
    {
        question: "What AWS service can you use to perform vulnerability assessments on your application?",
        options: [
            { answer: "A. CloudTrail", isCorrect: false },
            { answer: "B. GuardDuty", isCorrect: false },
            { answer: "C. Inspector", isCorrect: true },
            { answer: "D. Trusted Advisor", isCorrect: false }
        ],
        explanation: "Amazon Inspector helps assess security vulnerabilities in AWS applications."
    },
    {
        question: "Which AWS service is used to distribute traffic among multiple resources, such as EC2 instances?",
        options: [
            { answer: "A. CloudFront", isCorrect: false },
            { answer: "B. Elastic Load Balancing (ELB)", isCorrect: true },
            { answer: "C. RDS", isCorrect: false },
            { answer: "D. Lambda", isCorrect: false }
        ],
        explanation: "Elastic Load Balancing distributes incoming application traffic across multiple targets to improve reliability."
    },
    {
        question: "What tool is recommended for estimating the cost of running workloads on AWS?",
        options: [
            { answer: "A. AWS Cost Explorer", isCorrect: false },
            { answer: "B. AWS Pricing Calculator", isCorrect: true },
            { answer: "C. AWS Trusted Advisor", isCorrect: false },
            { answer: "D. CloudTrail", isCorrect: false }
        ],
        explanation: "The AWS Pricing Calculator helps estimate costs based on workload needs."
    },
    {
        question: "What is the AWS service used for logging API calls made in an AWS account?",
        options: [
            { answer: "A. CloudWatch", isCorrect: false },
            { answer: "B. CloudTrail", isCorrect: true },
            { answer: "C. SNS", isCorrect: false },
            { answer: "D. S3", isCorrect: false }
        ],
        explanation: "AWS CloudTrail logs API activity, useful for monitoring and auditing account actions."
    },
    {
        question: "Which AWS service can reduce the cost of long-term data storage and provides retrieval options such as expedited or bulk?",
        options: [
            { answer: "A. S3 Standard", isCorrect: false },
            { answer: "B. S3 Glacier", isCorrect: true },
            { answer: "C. S3 Intelligent-Tiering", isCorrect: false },
            { answer: "D. S3 One Zone-IA", isCorrect: false }
        ],
        explanation: "Amazon S3 Glacier provides a low-cost storage option for archiving and long-term backups."
    },
    {
        question: "What term best describes the AWS pricing model?",
        options: [
            { answer: "A. Pay-all-up-front", isCorrect: false },
            { answer: "B. Pay-as-you-go", isCorrect: true },
            { answer: "C. Pay-all-at-end", isCorrect: false },
            { answer: "D. None of the above", isCorrect: false }
        ],
        explanation: "AWS operates on a pay-as-you-go model with no upfront costs or termination fees."
    },
    {
        question: "Which AWS service is used to manage multiple AWS accounts and offers consolidated billing?",
        options: [
            { answer: "A. AWS TCO", isCorrect: false },
            { answer: "B. AWS Billing Manager", isCorrect: false },
            { answer: "C. AWS Consolidated Management", isCorrect: false },
            { answer: "D. AWS Organizations", isCorrect: true }
        ],
        explanation: "AWS Organizations helps manage multiple AWS accounts with features like consolidated billing."
    },
    {
        question: "Which AWS support plans are available for AWS customers? (Select all that apply)",
        options: [
            { answer: "A. Enterprise", isCorrect: true },
            { answer: "B. Expert", isCorrect: false },
            { answer: "C. Basic", isCorrect: true },
            { answer: "D. Business", isCorrect: true }
        ],
        explanation: "AWS offers four support plans: Basic, Developer, Business, and Enterprise."
    },
    {
        question: "What service allows secure access to AWS security and compliance documents?",
        options: [
            { answer: "A. AWS Trusted Advisor", isCorrect: false },
            { answer: "B. Amazon Inspector", isCorrect: false },
            { answer: "C. AWS Artifact", isCorrect: true },
            { answer: "D. AWS Billing Console", isCorrect: false }
        ],
        explanation: "AWS Artifact provides access to AWS security and compliance documents and agreements."
    },
    {
        question: "Which AWS service allows you to perform vulnerability assessments on your application?",
        options: [
            { answer: "A. CloudTrail", isCorrect: false },
            { answer: "B. GuardDuty", isCorrect: false },
            { answer: "C. Inspector", isCorrect: true },
            { answer: "D. Trusted Advisor", isCorrect: false }
        ],
        explanation: "Amazon Inspector assesses applications for security vulnerabilities."
    },
    {
        question: "Which AWS service would you use to simplify the process of database migration?",
        options: [
            { answer: "A. AWS Storage Gateway", isCorrect: false },
            { answer: "B. AWS Database Migration Service (DMS)", isCorrect: true },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. Amazon AppStream 2.0", isCorrect: false }
        ],
        explanation: "AWS Database Migration Service helps migrate databases to AWS with minimal downtime."
    },
    {
        question: "What component of AWS global infrastructure does Amazon CloudFront use to reduce latency?",
        options: [
            { answer: "A. AWS Regions", isCorrect: false },
            { answer: "B. AWS edge locations", isCorrect: true },
            { answer: "C. Availability Zones", isCorrect: false },
            { answer: "D. Amazon VPC", isCorrect: false }
        ],
        explanation: "CloudFront uses edge locations to cache content closer to users, improving load times."
    },
    {
        question: "Which service should be enabled to add an extra layer of security for login to the AWS Management Console?",
        options: [
            { answer: "A. AWS Cloud Directory", isCorrect: false },
            { answer: "B. IAM role auditing", isCorrect: false },
            { answer: "C. Multi-Factor Authentication (MFA)", isCorrect: true },
            { answer: "D. AWS CloudTrail", isCorrect: false }
        ],
        explanation: "Enabling MFA adds an additional layer of security to user logins on the AWS Management Console."
    },
    {
        question: "A company needs a content delivery network for fast and secure data delivery worldwide. Which AWS service should they use?",
        options: [
            { answer: "A. Amazon EC2", isCorrect: false },
            { answer: "B. Amazon CloudFront", isCorrect: true },
            { answer: "C. AWS CloudFormation", isCorrect: false },
            { answer: "D. AWS VPN", isCorrect: false }
        ],
        explanation: "Amazon CloudFront is AWS's content delivery network (CDN), distributing content globally with low latency."
    },
    {
        question: "Which AWS service is responsible for tracking user activities and API calls for compliance and auditing?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: true },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. Amazon SNS", isCorrect: false },
            { answer: "D. Amazon GuardDuty", isCorrect: false }
        ],
        explanation: "AWS CloudTrail records user activities and API calls across the AWS infrastructure for auditing purposes."
    },
    {
        question: "Which AWS service provides a virtual desktop infrastructure (VDI) for remote access?",
        options: [
            { answer: "A. AWS Fargate", isCorrect: false },
            { answer: "B. Amazon WorkSpaces", isCorrect: true },
            { answer: "C. AWS Lambda", isCorrect: false },
            { answer: "D. Amazon CloudFront", isCorrect: false }
        ],
        explanation: "Amazon WorkSpaces offers a managed, secure, and scalable virtual desktop solution."
    },
    {
        question: "Which service is responsible for distributing content globally and reducing latency?",
        options: [
            { answer: "A. Amazon RDS", isCorrect: false },
            { answer: "B. Amazon CloudFront", isCorrect: true },
            { answer: "C. Amazon S3", isCorrect: false },
            { answer: "D. AWS VPN", isCorrect: false }
        ],
        explanation: "Amazon CloudFront uses Edge Locations to cache content closer to users, reducing latency."
    },
    {
        question: "What AWS service should you use to create a billing alarm for monitoring costs?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: false },
            { answer: "B. AWS Cost Explorer", isCorrect: false },
            { answer: "C. AWS CloudWatch", isCorrect: true },
            { answer: "D. Amazon SNS", isCorrect: false }
        ],
        explanation: "AWS CloudWatch allows users to set up alarms based on cost thresholds and other metrics."
    },
    {
        question: "What AWS service allows you to audit API calls across your AWS account?",
        options: [
            { answer: "A. AWS Config", isCorrect: false },
            { answer: "B. AWS CloudTrail", isCorrect: true },
            { answer: "C. AWS Lambda", isCorrect: false },
            { answer: "D. AWS X-Ray", isCorrect: false }
        ],
        explanation: "AWS CloudTrail logs API calls across your account, which is useful for auditing and compliance."
    },
    {
        question: "What tool allows you to estimate the cost of running workloads on AWS?",
        options: [
            { answer: "A. AWS TCO Calculator", isCorrect: false },
            { answer: "B. AWS Cost Explorer", isCorrect: false },
            { answer: "C. AWS Pricing Calculator", isCorrect: true },
            { answer: "D. AWS Trusted Advisor", isCorrect: false }
        ],
        explanation: "The AWS Pricing Calculator helps estimate costs based on specific workloads and configurations."
    },
    {
        question: "Which service offers guidance on AWS best practices for cost and performance optimization?",
        options: [
            { answer: "A. AWS Shield", isCorrect: false },
            { answer: "B. AWS Trusted Advisor", isCorrect: true },
            { answer: "C. AWS Artifact", isCorrect: false },
            { answer: "D. AWS CloudTrail", isCorrect: false }
        ],
        explanation: "AWS Trusted Advisor provides best-practice recommendations across multiple categories including cost and performance."
    },
    {
        question: "What is a primary advantage of the AWS pay-as-you-go pricing model?",
        options: [
            { answer: "A. Requires large upfront payments", isCorrect: false },
            { answer: "B. Charges only for resources used", isCorrect: true },
            { answer: "C. Annual contracts are required", isCorrect: false },
            { answer: "D. Prices remain the same regardless of usage", isCorrect: false }
        ],
        explanation: "AWS's pay-as-you-go model charges only for the resources used, providing cost flexibility."
    },
    {
        question: "Which AWS service helps to ensure compliance by providing access to audit reports?",
        options: [
            { answer: "A. AWS Artifact", isCorrect: true },
            { answer: "B. Amazon Inspector", isCorrect: false },
            { answer: "C. AWS Trusted Advisor", isCorrect: false },
            { answer: "D. AWS IAM", isCorrect: false }
        ],
        explanation: "AWS Artifact provides on-demand access to AWS compliance documentation and audit reports."
    },
    {
        question: "Which AWS service uses a global network of Edge Locations to cache content closer to end users?",
        options: [
            { answer: "A. Amazon CloudFront", isCorrect: true },
            { answer: "B. AWS Lambda", isCorrect: false },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. AWS VPC", isCorrect: false }
        ],
        explanation: "Amazon CloudFront caches content at Edge Locations globally to improve access speed for end users."
    },
    {
        question: "What AWS service provides recommendations on cost optimization, security, and performance?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: false },
            { answer: "B. AWS Trusted Advisor", isCorrect: true },
            { answer: "C. AWS CloudFormation", isCorrect: false },
            { answer: "D. AWS Artifact", isCorrect: false }
        ],
        explanation: "AWS Trusted Advisor offers insights into cost optimization, performance, and security best practices in AWS."
    },
    {
        question: "Which AWS service enables you to centrally manage billing and access policies across multiple AWS accounts?",
        options: [
            { answer: "A. AWS Billing Console", isCorrect: false },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. AWS Organizations", isCorrect: true },
            { answer: "D. Amazon SNS", isCorrect: false }
        ],
        explanation: "AWS Organizations allows central management of billing and access policies across AWS accounts."
    },
    {
        question: "Which AWS service is suitable for handling machine learning tasks, such as building, training, and deploying models?",
        options: [
            { answer: "A. AWS Glue", isCorrect: false },
            { answer: "B. Amazon Lex", isCorrect: false },
            { answer: "C. Amazon SageMaker", isCorrect: true },
            { answer: "D. AWS Rekognition", isCorrect: false }
        ],
        explanation: "Amazon SageMaker is designed for machine learning workflows, including model building, training, and deployment."
    },
    {
        question: "Which AWS service allows developers to automate the deployment and scaling of web applications in containers?",
        options: [
            { answer: "A. AWS Lambda", isCorrect: false },
            { answer: "B. Amazon RDS", isCorrect: false },
            { answer: "C. Amazon Elastic Kubernetes Service (EKS)", isCorrect: true },
            { answer: "D. AWS CodePipeline", isCorrect: false }
        ],
        explanation: "Amazon EKS provides a managed Kubernetes service that automates the deployment and scaling of containerized applications."
    },
    {
        question: "What AWS service is designed to improve the security of web applications by filtering and monitoring HTTP requests?",
        options: [
            { answer: "A. AWS Shield", isCorrect: false },
            { answer: "B. AWS WAF", isCorrect: true },
            { answer: "C. AWS IAM", isCorrect: false },
            { answer: "D. Amazon GuardDuty", isCorrect: false }
        ],
        explanation: "AWS WAF is a web application firewall that helps protect web applications by filtering HTTP requests."
    },
    {
        question: "Which AWS tool helps you assess your on-premises resources to determine costs and plan a migration to AWS?",
        options: [
            { answer: "A. AWS Artifact", isCorrect: false },
            { answer: "B. AWS Migration Hub", isCorrect: false },
            { answer: "C. AWS Application Discovery Service", isCorrect: true },
            { answer: "D. AWS Snowball", isCorrect: false }
        ],
        explanation: "AWS Application Discovery Service helps with migration planning by assessing on-premises resources and estimating costs."
    },
    {
        question: "Which AWS service allows you to run code without provisioning or managing servers?",
        options: [
            { answer: "A. Amazon EC2", isCorrect: false },
            { answer: "B. AWS Lambda", isCorrect: true },
            { answer: "C. AWS OpsWorks", isCorrect: false },
            { answer: "D. Amazon ECS", isCorrect: false }
        ],
        explanation: "AWS Lambda is a serverless compute service that automatically manages the infrastructure required to run code."
    },
    {
        question: "Which AWS service can provide long-term data storage at a low cost?",
        options: [
            { answer: "A. Amazon S3 Standard", isCorrect: false },
            { answer: "B. Amazon Glacier", isCorrect: true },
            { answer: "C. Amazon S3 Intelligent-Tiering", isCorrect: false },
            { answer: "D. Amazon CloudFront", isCorrect: false }
        ],
        explanation: "Amazon Glacier is ideal for long-term archival storage, offering a low-cost option with various retrieval speeds."
    },
    {
        question: "Which AWS service is designed to help audit, secure, and enforce compliance?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. AWS Artifact", isCorrect: false },
            { answer: "C. AWS CloudTrail", isCorrect: true },
            { answer: "D. Amazon GuardDuty", isCorrect: false }
        ],
        explanation: "AWS CloudTrail records all actions taken in an AWS account, useful for compliance and auditing purposes."
    },
    {
        question: "What is the purpose of an Amazon CloudFront edge location?",
        options: [
            { answer: "A. To cache content closer to users", isCorrect: true },
            { answer: "B. To store data in Amazon S3", isCorrect: false },
            { answer: "C. To host databases", isCorrect: false },
            { answer: "D. To provide network connectivity for EC2", isCorrect: false }
        ],
        explanation: "CloudFront edge locations cache content near users to reduce latency and improve performance."
    },
    {
        question: "Which AWS support plan includes access to a Technical Account Manager (TAM)?",
        options: [
            { answer: "A. Developer", isCorrect: false },
            { answer: "B. Basic", isCorrect: false },
            { answer: "C. Business", isCorrect: false },
            { answer: "D. Enterprise", isCorrect: true }
        ],
        explanation: "The Enterprise Support plan provides access to a Technical Account Manager for additional guidance."
    },
    {
        question: "What is a primary benefit of the AWS shared responsibility model?",
        options: [
            { answer: "A. AWS manages all customer data", isCorrect: false },
            { answer: "B. AWS secures the cloud infrastructure while customers secure their applications and data within the cloud", isCorrect: true },
            { answer: "C. AWS encrypts all data by default", isCorrect: false },
            { answer: "D. Customers control physical access to data centers", isCorrect: false }
        ],
        explanation: "Under the shared responsibility model, AWS secures the infrastructure, while customers secure their data and applications."
    },
    {
        question: "Which AWS service enables creation and management of AWS accounts under a single organization?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. AWS Organizations", isCorrect: true },
            { answer: "C. Amazon CloudWatch", isCorrect: false },
            { answer: "D. AWS Systems Manager", isCorrect: false }
        ],
        explanation: "AWS Organizations allows central management of multiple AWS accounts within an organization."
    },
    {
        question: "What type of pricing model does AWS offer for on-demand compute services?",
        options: [
            { answer: "A. Annual subscription", isCorrect: false },
            { answer: "B. Pay-as-you-go", isCorrect: true },
            { answer: "C. Fixed monthly fee", isCorrect: false },
            { answer: "D. Upfront payment only", isCorrect: false }
        ],
        explanation: "AWS uses a pay-as-you-go model, allowing customers to pay only for the resources they consume."
    },
    {
        question: "Which AWS service provides managed MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server databases?",
        options: [
            { answer: "A. Amazon RDS", isCorrect: true },
            { answer: "B. Amazon DynamoDB", isCorrect: false },
            { answer: "C. Amazon Redshift", isCorrect: false },
            { answer: "D. AWS Lambda", isCorrect: false }
        ],
        explanation: "Amazon RDS is a managed database service that supports multiple SQL-based engines, including MySQL and PostgreSQL."
    },
    {
        question: "What service can help you estimate the costs of migrating an on-premises workload to AWS?",
        options: [
            { answer: "A. AWS Pricing Calculator", isCorrect: false },
            { answer: "B. Migration Evaluator", isCorrect: true },
            { answer: "C. AWS Config", isCorrect: false },
            { answer: "D. AWS Trusted Advisor", isCorrect: false }
        ],
        explanation: "Migration Evaluator provides insights and cost estimates for planning a migration to AWS."
    },
    {
        question: "Which feature of Amazon S3 allows you to automatically move data to lower-cost storage classes?",
        options: [
            { answer: "A. S3 Versioning", isCorrect: false },
            { answer: "B. S3 Lifecycle Policies", isCorrect: true },
            { answer: "C. S3 Cross-Region Replication", isCorrect: false },
            { answer: "D. S3 Transfer Acceleration", isCorrect: false }
        ],
        explanation: "S3 Lifecycle Policies can automatically transition objects to different storage classes based on age or other conditions."
    },
    {
        question: "Which AWS service provides an on-demand and fully managed file storage solution that is accessible over NFS?",
        options: [
            { answer: "A. Amazon EFS", isCorrect: true },
            { answer: "B. Amazon S3", isCorrect: false },
            { answer: "C. Amazon Glacier", isCorrect: false },
            { answer: "D. AWS Storage Gateway", isCorrect: false }
        ],
        explanation: "Amazon Elastic File System (EFS) offers a scalable file storage solution for use with AWS and on-premises resources."
    },
    {
        question: "Which AWS service allows you to monitor and analyze security events in real-time?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: false },
            { answer: "B. Amazon Inspector", isCorrect: false },
            { answer: "C. AWS Config", isCorrect: false },
            { answer: "D. Amazon GuardDuty", isCorrect: true }
        ],
        explanation: "Amazon GuardDuty provides intelligent threat detection to help monitor and protect AWS accounts and workloads."
    },
    {
        question: "What AWS service helps you with identity federation and single sign-on (SSO) access to multiple accounts?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. AWS Directory Service", isCorrect: false },
            { answer: "C. AWS Organizations", isCorrect: false },
            { answer: "D. AWS Single Sign-On (SSO)", isCorrect: true }
        ],
        explanation: "AWS Single Sign-On allows identity federation and SSO for centralized access management across AWS accounts."
    },
    {
        question: "Which AWS service is designed for data warehousing and is optimized for high-performance analysis of large datasets?",
        options: [
            { answer: "A. Amazon DynamoDB", isCorrect: false },
            { answer: "B. Amazon Aurora", isCorrect: false },
            { answer: "C. Amazon Redshift", isCorrect: true },
            { answer: "D. Amazon ElastiCache", isCorrect: false }
        ],
        explanation: "Amazon Redshift is a fully managed data warehouse solution optimized for analytical queries on large datasets."
    },
    {
        question: "Which AWS service allows you to create virtual machines on demand?",
        options: [
            { answer: "A. Amazon S3", isCorrect: false },
            { answer: "B. AWS Lambda", isCorrect: false },
            { answer: "C. Amazon EC2", isCorrect: true },
            { answer: "D. AWS Glue", isCorrect: false }
        ],
        explanation: "Amazon EC2 allows you to launch and manage virtual machines on AWS."
    },
    {
        question: "What is the AWS service designed for managing distributed denial-of-service (DDoS) protection?",
        options: [
            { answer: "A. AWS WAF", isCorrect: false },
            { answer: "B. Amazon CloudFront", isCorrect: false },
            { answer: "C. AWS Shield", isCorrect: true },
            { answer: "D. AWS Trusted Advisor", isCorrect: false }
        ],
        explanation: "AWS Shield offers protection against DDoS attacks for applications running on AWS."
    },
    {
        question: "Which storage service is best suited for archival storage with infrequent access?",
        options: [
            { answer: "A. Amazon S3 Standard", isCorrect: false },
            { answer: "B. Amazon Glacier", isCorrect: true },
            { answer: "C. Amazon RDS", isCorrect: false },
            { answer: "D. AWS Snowball", isCorrect: false }
        ],
        explanation: "Amazon Glacier provides low-cost storage for long-term archival needs with infrequent access."
    },
    {
        question: "Which AWS service allows you to monitor API calls and activity within your AWS account?",
        options: [
            { answer: "A. AWS CloudWatch", isCorrect: false },
            { answer: "B. AWS CloudTrail", isCorrect: true },
            { answer: "C. AWS Config", isCorrect: false },
            { answer: "D. Amazon GuardDuty", isCorrect: false }
        ],
        explanation: "AWS CloudTrail logs all API calls and account activity, helping with compliance and auditing."
    },
    {
        question: "What AWS service allows centralized management of multiple AWS accounts?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. AWS Organizations", isCorrect: true },
            { answer: "C. Amazon VPC", isCorrect: false },
            { answer: "D. AWS Directory Service", isCorrect: false }
        ],
        explanation: "AWS Organizations allows centralized billing and account management across multiple AWS accounts."
    },
    {
        question: "Which AWS feature enables automatic scaling of compute resources based on demand?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. Elastic Load Balancer", isCorrect: false },
            { answer: "C. Auto Scaling", isCorrect: true },
            { answer: "D. AWS Batch", isCorrect: false }
        ],
        explanation: "Auto Scaling adjusts the number of instances based on demand, ensuring efficient resource use."
    },
    {
        question: "Which AWS support plan provides access to a Technical Account Manager (TAM)?",
        options: [
            { answer: "A. Developer", isCorrect: false },
            { answer: "B. Business", isCorrect: false },
            { answer: "C. Enterprise", isCorrect: true },
            { answer: "D. Basic", isCorrect: false }
        ],
        explanation: "The Enterprise support plan provides access to a Technical Account Manager for personalized guidance."
    },
    {
        question: "Which AWS service provides data encryption in transit and at rest by default?",
        options: [
            { answer: "A. Amazon RDS", isCorrect: true },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. Amazon S3", isCorrect: false },
            { answer: "D. Amazon CloudFront", isCorrect: false }
        ],
        explanation: "Amazon RDS supports data encryption both at rest and in transit using industry-standard encryption protocols."
    },
    {
        question: "What AWS service should you use to establish a dedicated network connection between your data center and AWS?",
        options: [
            { answer: "A. AWS Direct Connect", isCorrect: true },
            { answer: "B. Amazon VPC", isCorrect: false },
            { answer: "C. AWS VPN", isCorrect: false },
            { answer: "D. AWS Transit Gateway", isCorrect: false }
        ],
        explanation: "AWS Direct Connect allows you to establish a dedicated network connection from your premises to AWS, which can offer lower latency."
    },
    {
        question: "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
        options: [
            { answer: "A. Amazon SNS", isCorrect: true },
            { answer: "B. AWS CloudTrail", isCorrect: false },
            { answer: "C. AWS Trusted Advisor", isCorrect: false },
            { answer: "D. Amazon Route 53", isCorrect: false }
        ],
        explanation: "Amazon Simple Notification Service (SNS) can be configured to send notifications based on CloudWatch alarm thresholds."
    },
    {
        question: "What AWS feature distributes incoming application or network traffic across multiple targets, such as EC2 instances?",
        options: [
            { answer: "A. Amazon RDS", isCorrect: false },
            { answer: "B. AWS Auto Scaling", isCorrect: false },
            { answer: "C. Elastic Load Balancing (ELB)", isCorrect: true },
            { answer: "D. AWS CloudFormation", isCorrect: false }
        ],
        explanation: "Elastic Load Balancing distributes incoming traffic to multiple targets, improving fault tolerance and availability."
    },
    {
        question: "Which AWS service provides managed Microsoft Active Directory in the AWS Cloud?",
        options: [
            { answer: "A. Amazon Cognito", isCorrect: false },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. AWS Directory Service", isCorrect: true },
            { answer: "D. AWS Single Sign-On (SSO)", isCorrect: false }
        ],
        explanation: "AWS Directory Service provides managed Active Directory functionality for applications requiring Windows AD compatibility."
    },
    {
        question: "Which AWS service can be used to run serverless applications without managing server infrastructure?",
        options: [
            { answer: "A. AWS Lambda", isCorrect: true },
            { answer: "B. Amazon EC2", isCorrect: false },
            { answer: "C. Amazon RDS", isCorrect: false },
            { answer: "D. AWS Elastic Beanstalk", isCorrect: false }
        ],
        explanation: "AWS Lambda allows you to run code without provisioning or managing servers, ideal for serverless applications."
    },
    {
        question: "What AWS service provides centralized access to all AWS compliance reports and agreements?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: false },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. AWS Artifact", isCorrect: true },
            { answer: "D. AWS Systems Manager", isCorrect: false }
        ],
        explanation: "AWS Artifact provides access to AWS compliance reports, helping customers adhere to regulatory requirements."
    },
    {
        question: "What is a primary advantage of using Amazon S3 as a storage solution?",
        options: [
            { answer: "A. Limited scalability", isCorrect: false },
            { answer: "B. Unlimited storage capacity", isCorrect: true },
            { answer: "C. Fixed storage pricing", isCorrect: false },
            { answer: "D. Built-in database functionality", isCorrect: false }
        ],
        explanation: "Amazon S3 offers virtually unlimited storage capacity, making it ideal for scalable storage needs."
    },
    {
        question: "What AWS service helps you migrate databases to AWS with minimal downtime?",
        options: [
            { answer: "A. AWS DataSync", isCorrect: false },
            { answer: "B. AWS Database Migration Service (DMS)", isCorrect: true },
            { answer: "C. AWS Snowball", isCorrect: false },
            { answer: "D. Amazon RDS", isCorrect: false }
        ],
        explanation: "AWS DMS is designed to help you migrate databases to AWS with minimal downtime during the migration process."
    },
    {
        question: "What AWS service can provide recommendations on cost optimization, performance, and security?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: false },
            { answer: "B. AWS Trusted Advisor", isCorrect: true },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. AWS IAM", isCorrect: false }
        ],
        explanation: "AWS Trusted Advisor offers guidance for cost optimization, security, fault tolerance, and performance improvements."
    },
    {
        question: "Which AWS service would help you enable a secure multi-factor authentication (MFA) for logging into the AWS Management Console?",
        options: [
            { answer: "A. Amazon S3", isCorrect: false },
            { answer: "B. AWS IAM", isCorrect: true },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. AWS CloudFormation", isCorrect: false }
        ],
        explanation: "AWS IAM allows you to enable MFA for enhanced account security, adding an extra layer of protection to user logins."
    },
    {
        question: "How can you monitor and track the API calls made on your AWS resources?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: true },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. AWS Direct Connect", isCorrect: false },
            { answer: "D. Amazon CloudFront", isCorrect: false }
        ],
        explanation: "AWS CloudTrail records API calls for your AWS account, providing visibility into account activity and aiding in compliance."
    },
    {
        question: "Which AWS service allows you to cache frequently accessed data for faster retrieval?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. Amazon RDS", isCorrect: false },
            { answer: "C. Amazon ElastiCache", isCorrect: true },
            { answer: "D. Amazon S3", isCorrect: false }
        ],
        explanation: "Amazon ElastiCache is a managed caching service that can improve application performance by caching frequently accessed data."
    },
    {
        question: "Which AWS service allows you to run containerized applications at scale?",
        options: [
            { answer: "A. Amazon EC2", isCorrect: false },
            { answer: "B. AWS Elastic Beanstalk", isCorrect: false },
            { answer: "C. Amazon ECS", isCorrect: true },
            { answer: "D. AWS Lambda", isCorrect: false }
        ],
        explanation: "Amazon ECS (Elastic Container Service) enables running and scaling containerized applications in a managed environment."
    },
    {
        question: "What tool can you use to estimate the cost of running resources on AWS before deployment?",
        options: [
            { answer: "A. AWS Trusted Advisor", isCorrect: false },
            { answer: "B. AWS TCO Calculator", isCorrect: false },
            { answer: "C. AWS Pricing Calculator", isCorrect: true },
            { answer: "D. AWS Config", isCorrect: false }
        ],
        explanation: "The AWS Pricing Calculator provides cost estimates for AWS services based on configuration and usage."
    },
    {
        question: "Which AWS service can help you analyze and secure your AWS environment by detecting malicious or unauthorized behavior?",
        options: [
            { answer: "A. AWS Config", isCorrect: false },
            { answer: "B. AWS GuardDuty", isCorrect: true },
            { answer: "C. Amazon SNS", isCorrect: false },
            { answer: "D. AWS Artifact", isCorrect: false }
        ],
        explanation: "AWS GuardDuty uses machine learning to detect suspicious activity in your AWS account, helping improve security posture."
    },
    {
        question: "What is the purpose of Amazon CloudFront?",
        options: [
            { answer: "A. To store large volumes of structured data", isCorrect: false },
            { answer: "B. To cache content closer to users", isCorrect: true },
            { answer: "C. To manage DNS routing", isCorrect: false },
            { answer: "D. To set up virtual networks", isCorrect: false }
        ],
        explanation: "Amazon CloudFront is a CDN that caches content at Edge Locations to reduce latency for users globally."
    },
    {
        question: "Which AWS service can help you migrate a database to the AWS Cloud with minimal downtime?",
        options: [
            { answer: "A. AWS Database Migration Service (DMS)", isCorrect: true },
            { answer: "B. AWS Glue", isCorrect: false },
            { answer: "C. Amazon RDS", isCorrect: false },
            { answer: "D. AWS Snowball", isCorrect: false }
        ],
        explanation: "AWS DMS enables database migration with minimal downtime by migrating your on-premises databases to AWS seamlessly."
    },
    {
        question: "Which AWS service is used to cache frequently accessed data to reduce latency?",
        options: [
            { answer: "A. Amazon ElastiCache", isCorrect: true },
            { answer: "B. Amazon S3", isCorrect: false },
            { answer: "C. Amazon RDS", isCorrect: false },
            { answer: "D. AWS Lambda", isCorrect: false }
        ],
        explanation: "Amazon ElastiCache is a managed caching service designed to reduce latency by storing frequently accessed data closer to applications."
    },
    {
        question: "What AWS service provides centralized access to compliance reports and agreements?",
        options: [
            { answer: "A. AWS Artifact", isCorrect: true },
            { answer: "B. AWS Trusted Advisor", isCorrect: false },
            { answer: "C. AWS Config", isCorrect: false },
            { answer: "D. AWS Identity and Access Management (IAM)", isCorrect: false }
        ],
        explanation: "AWS Artifact offers access to AWS compliance reports and agreements on demand, supporting regulatory requirements."
    },
    {
        question: "Which AWS support plan includes a Technical Account Manager (TAM)?",
        options: [
            { answer: "A. Basic", isCorrect: false },
            { answer: "B. Developer", isCorrect: false },
            { answer: "C. Business", isCorrect: false },
            { answer: "D. Enterprise", isCorrect: true }
        ],
        explanation: "The Enterprise Support plan provides access to a Technical Account Manager for dedicated support and guidance."
    },
    {
        question: "Which AWS service provides a fully managed virtual desktop infrastructure?",
        options: [
            { answer: "A. AWS WorkSpaces", isCorrect: true },
            { answer: "B. AWS AppStream", isCorrect: false },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. Amazon S3", isCorrect: false }
        ],
        explanation: "AWS WorkSpaces provides a fully managed desktop-as-a-service solution for running Windows and Linux desktops in the cloud."
    },
    {
        question: "What AWS service enables you to automate infrastructure provisioning using code?",
        options: [
            { answer: "A. AWS CodeDeploy", isCorrect: false },
            { answer: "B. AWS CloudFormation", isCorrect: true },
            { answer: "C. AWS OpsWorks", isCorrect: false },
            { answer: "D. AWS Systems Manager", isCorrect: false }
        ],
        explanation: "AWS CloudFormation allows you to provision AWS resources consistently using templates written in JSON or YAML."
    },
    {
        question: "Which AWS service enables you to analyze streaming data in real-time?",
        options: [
            { answer: "A. Amazon Kinesis", isCorrect: true },
            { answer: "B. Amazon S3", isCorrect: false },
            { answer: "C. AWS Glue", isCorrect: false },
            { answer: "D. Amazon Redshift", isCorrect: false }
        ],
        explanation: "Amazon Kinesis is designed for collecting, processing, and analyzing streaming data in real-time."
    },
    {
        question: "What AWS service allows you to monitor and log API actions across your account?",
        options: [
            { answer: "A. AWS Trusted Advisor", isCorrect: false },
            { answer: "B. AWS CloudTrail", isCorrect: true },
            { answer: "C. AWS CloudFormation", isCorrect: false },
            { answer: "D. Amazon S3", isCorrect: false }
        ],
        explanation: "AWS CloudTrail logs API actions, providing visibility into activity within your AWS account."
    },
    {
        question: "What term best describes the AWS pricing model?",
        options: [
            { answer: "A. Pay-all-up-front", isCorrect: false },
            { answer: "B. Pay-as-you-go", isCorrect: true },
            { answer: "C. Pay-all-at-end", isCorrect: false },
            { answer: "D. None of the above", isCorrect: false }
        ],
        explanation: "AWS operates on a pay-as-you-go model, meaning you only pay for the services you use."
    },
    {
        question: "Which AWS support plan includes access to a Technical Account Manager (TAM)?",
        options: [
            { answer: "A. Developer", isCorrect: false },
            { answer: "B. Business", isCorrect: false },
            { answer: "C. Enterprise", isCorrect: true },
            { answer: "D. Basic", isCorrect: false }
        ],
        explanation: "The Enterprise support plan provides a TAM for personalized technical guidance."
    },
    {
        question: "Which AWS service uses Edge Locations to cache content closer to users?",
        options: [
            { answer: "A. Amazon ElastiCache", isCorrect: false },
            { answer: "B. Amazon Route 53", isCorrect: false },
            { answer: "C. Amazon CloudFront", isCorrect: true },
            { answer: "D. AWS Global Accelerator", isCorrect: false }
        ],
        explanation: "Amazon CloudFront is a CDN service that uses Edge Locations for faster content delivery."
    },
    {
        question: "What is the primary function of AWS IAM?",
        options: [
            { answer: "A. To monitor billing alarms", isCorrect: false },
            { answer: "B. To manage identity and access for AWS resources", isCorrect: true },
            { answer: "C. To deploy applications automatically", isCorrect: false },
            { answer: "D. To monitor compliance activities", isCorrect: false }
        ],
        explanation: "AWS IAM manages user and resource access within your AWS account securely."
    },
    {
        question: "Which AWS service offers data warehousing capabilities optimized for analytics?",
        options: [
            { answer: "A. Amazon Aurora", isCorrect: false },
            { answer: "B. Amazon DynamoDB", isCorrect: false },
            { answer: "C. Amazon Redshift", isCorrect: true },
            { answer: "D. AWS Glue", isCorrect: false }
        ],
        explanation: "Amazon Redshift is designed for efficient querying and data analysis over large datasets."
    },
    {
        question: "What AWS service provides managed desktop environments?",
        options: [
            { answer: "A. AWS WorkSpaces", isCorrect: true },
            { answer: "B. AWS Elastic Beanstalk", isCorrect: false },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. AWS Directory Service", isCorrect: false }
        ],
        explanation: "AWS WorkSpaces delivers fully managed virtual desktop infrastructure for remote work."
    },
    {
        question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        options: [
            { answer: "A. Amazon EC2 costs are billed on a monthly basis.", isCorrect: false },
            { answer: "B. Customers retain full administrative access to their Amazon EC2 instances.", isCorrect: false },
            { answer: "C. Amazon EC2 instances can be launched on-demand when needed.", isCorrect: true },
            { answer: "D. Customers can permanently run enough instances to handle peak workloads.", isCorrect: false }
        ],
        explanation: "Amazon EC2's on-demand pricing model allows users to launch and terminate instances based on demand, saving costs for varying workloads."
    },
    {
        question: "Which AWS service simplifies migration of a database to AWS?",
        options: [
            { answer: "A. AWS Storage Gateway", isCorrect: false },
            { answer: "B. AWS Database Migration Service (AWS DMS)", isCorrect: true },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. AWS AppStream 2.0", isCorrect: false }
        ],
        explanation: "AWS DMS helps migrate databases to AWS securely and with minimal downtime."
    },
    {
        question: "Which AWS service enables customers to find, buy, and immediately use software solutions in their AWS environment?",
        options: [
            { answer: "A. AWS Config", isCorrect: false },
            { answer: "B. AWS OpsWorks", isCorrect: false },
            { answer: "C. AWS SDK", isCorrect: false },
            { answer: "D. AWS Marketplace", isCorrect: true }
        ],
        explanation: "AWS Marketplace allows customers to find and purchase software solutions that are pre-configured for AWS environments."
    },
    {
        question: "What AWS service uses Edge Locations to cache content for faster delivery?",
        options: [
            { answer: "A. AWS ElastiCache", isCorrect: false },
            { answer: "B. Amazon Route 53", isCorrect: false },
            { answer: "C. Amazon CloudFront", isCorrect: true },
            { answer: "D. AWS Global Accelerator", isCorrect: false }
        ],
        explanation: "Amazon CloudFront is a CDN that uses Edge Locations to deliver content with low latency."
    },
    {
        question: "Which AWS service provides a highly available and scalable DNS web service?",
        options: [
            { answer: "A. Amazon VPC", isCorrect: false },
            { answer: "B. Amazon CloudFront", isCorrect: false },
            { answer: "C. Amazon Route 53", isCorrect: true },
            { answer: "D. Amazon Connect", isCorrect: false }
        ],
        explanation: "Amazon Route 53 is a scalable DNS service for routing users to AWS-hosted applications."
    },
    {
        question: "What AWS feature enables you to scale EC2 capacity automatically based on demand?",
        options: [
            { answer: "A. Auto Scaling", isCorrect: true },
            { answer: "B. Elastic Load Balancer", isCorrect: false },
            { answer: "C. AWS Batch", isCorrect: false },
            { answer: "D. Amazon CloudWatch", isCorrect: false }
        ],
        explanation: "Auto Scaling automatically adjusts EC2 instances to meet traffic demands, ensuring cost efficiency."
    },
    {
        question: "What AWS service allows centralized management of multiple AWS accounts?",
        options: [
            { answer: "A. AWS IAM", isCorrect: false },
            { answer: "B. AWS Organizations", isCorrect: true },
            { answer: "C. AWS Directory Service", isCorrect: false },
            { answer: "D. Amazon CloudWatch", isCorrect: false }
        ],
        explanation: "AWS Organizations enables centralized management of accounts and policies for resource sharing and consolidated billing."
    },
    {
        question: "Which AWS service is designed to simplify and automate migration of databases to the AWS Cloud?",
        options: [
            { answer: "A. AWS Glue", isCorrect: false },
            { answer: "B. AWS Database Migration Service (DMS)", isCorrect: true },
            { answer: "C. Amazon RDS", isCorrect: false },
            { answer: "D. Amazon Redshift", isCorrect: false }
        ],
        explanation: "AWS DMS allows secure, low-downtime migrations of databases to AWS."
    },
    {
        question: "What AWS service provides a scalable content delivery network (CDN)?",
        options: [
            { answer: "A. Amazon CloudFront", isCorrect: true },
            { answer: "B. Amazon ElastiCache", isCorrect: false },
            { answer: "C. Amazon Route 53", isCorrect: false },
            { answer: "D. AWS Direct Connect", isCorrect: false }
        ],
        explanation: "Amazon CloudFront uses AWS Edge Locations to distribute content globally with low latency."
    },
    {
        question: "Which AWS service allows administrators to enforce policies for IAM users and roles?",
        options: [
            { answer: "A. AWS Config", isCorrect: false },
            { answer: "B. AWS IAM", isCorrect: true },
            { answer: "C. Amazon CloudWatch", isCorrect: false },
            { answer: "D. AWS Systems Manager", isCorrect: false }
        ],
        explanation: "AWS IAM provides detailed control over user permissions and policies."
    },
    {
        question: "What is the main advantage of using AWS Auto Scaling?",
        options: [
            { answer: "A. Enables applications to scale globally with minimal effort.", isCorrect: false },
            { answer: "B. Automatically adjusts capacity to maintain performance and reduce costs.", isCorrect: true },
            { answer: "C. Provides a global cache for frequently accessed data.", isCorrect: false },
            { answer: "D. Offers low-latency data replication across regions.", isCorrect: false }
        ],
        explanation: "AWS Auto Scaling dynamically adjusts compute capacity based on demand, optimizing both performance and cost."
    },
    {
        question: "What type of storage does Amazon S3 provide?",
        options: [
            { answer: "A. Block storage", isCorrect: false },
            { answer: "B. Object storage", isCorrect: true },
            { answer: "C. File storage", isCorrect: false },
            { answer: "D. Ephemeral storage", isCorrect: false }
        ],
        explanation: "Amazon S3 offers object storage for scalable, durable, and secure data management."
    },
    {
        question: "Which AWS service is designed for monitoring and logging API actions?",
        options: [
            { answer: "A. AWS CloudTrail", isCorrect: true },
            { answer: "B. AWS CloudWatch", isCorrect: false },
            { answer: "C. AWS Config", isCorrect: false },
            { answer: "D. Amazon SNS", isCorrect: false }
        ],
        explanation: "AWS CloudTrail tracks API calls for governance, compliance, and operational auditing."
    },
    {
        question: "Which AWS service can manage billing across multiple accounts?",
        options: [
            { answer: "A. AWS Billing Dashboard", isCorrect: false },
            { answer: "B. AWS Organizations", isCorrect: true },
            { answer: "C. AWS Cost Explorer", isCorrect: false },
            { answer: "D. AWS Resource Groups", isCorrect: false }
        ],
        explanation: "AWS Organizations allows centralized billing and policy management across accounts."
    },
    {
        question: "Which service allows you to analyze data from multiple sources in real time?",
        options: [
            { answer: "A. AWS Glue", isCorrect: false },
            { answer: "B. Amazon Kinesis", isCorrect: true },
            { answer: "C. Amazon Redshift", isCorrect: false },
            { answer: "D. Amazon QuickSight", isCorrect: false }
        ],
        explanation: "Amazon Kinesis enables real-time data ingestion and analysis."
    },
    {
        question: "Which AWS service is used to add an additional layer of login security to a user's AWS Management Console?",
        options: [
            { answer: "A. Use AWS Cloud Directory", isCorrect: false },
            { answer: "B. Audit IAM roles", isCorrect: false },
            { answer: "C. Enable Multi-Factor Authentication (MFA)", isCorrect: true },
            { answer: "D. Enable AWS CloudTrail", isCorrect: false }
        ],
        explanation: "Multi-Factor Authentication adds an extra layer of security by requiring a second verification factor, reducing the risk of unauthorized access."
    },
    {
        question: "Which AWS service can identify the user that made an API call when an EC2 instance is terminated?",
        options: [
            { answer: "A. Amazon CloudWatch", isCorrect: false },
            { answer: "B. AWS CloudTrail", isCorrect: true },
            { answer: "C. AWS X-Ray", isCorrect: false },
            { answer: "D. IAM", isCorrect: false }
        ],
        explanation: "AWS CloudTrail provides a record of all API calls made in the account, including details about the caller and the action taken."
    },
    {
        question: "Where can a customer find information about prohibited actions on AWS infrastructure?",
        options: [
            { answer: "A. AWS Trusted Advisor", isCorrect: false },
            { answer: "B. IAM", isCorrect: false },
            { answer: "C. AWS Billing Console", isCorrect: false },
            { answer: "D. AWS Acceptable Use Policy", isCorrect: true }
        ],
        explanation: "The AWS Acceptable Use Policy outlines prohibited activities and usage of AWS services, ensuring customers follow guidelines for responsible use."
    },
    {
        question: "Which AWS service provides real-time guidance on provisioning resources for cost optimization and security?",
        options: [
            { answer: "A. AWS Config", isCorrect: false },
            { answer: "B. AWS Trusted Advisor", isCorrect: true },
            { answer: "C. AWS Systems Manager", isCorrect: false },
            { answer: "D. AWS Security Hub", isCorrect: false }
        ],
        explanation: "AWS Trusted Advisor analyzes your AWS environment and provides recommendations to improve cost efficiency, performance, and security."
    },
    {
        question: "What AWS service enables you to cache content globally for faster delivery to users?",
        options: [
            { answer: "A. ElastiCache", isCorrect: false },
            { answer: "B. CloudFront", isCorrect: true },
            { answer: "C. Route 53", isCorrect: false },
            { answer: "D. Global Accelerator", isCorrect: false }
        ],
        explanation: "Amazon CloudFront is a Content Delivery Network (CDN) that caches content at Edge Locations to reduce latency for users worldwide."
    },
    {
        question: "What is an Availability Zone in the AWS global infrastructure?",
        options: [
            { answer: "A. A distinct location within an AWS Region with multiple isolated locations", isCorrect: false },
            { answer: "B. A fully isolated partition of AWS Region infrastructure", isCorrect: true },
            { answer: "C. A caching hub for AWS data transfer", isCorrect: false },
            { answer: "D. A backup site for disaster recovery", isCorrect: false }
        ],
        explanation: "Availability Zones are fully isolated partitions within an AWS Region, designed to ensure fault tolerance and high availability."
    },
    {
        question: "Which AWS service provides a highly available and scalable Domain Name System (DNS)?",
        options: [
            { answer: "A. Amazon CloudFront", isCorrect: false },
            { answer: "B. Amazon Route 53", isCorrect: true },
            { answer: "C. AWS Global Accelerator", isCorrect: false },
            { answer: "D. Amazon Connect", isCorrect: false }
        ],
        explanation: "Amazon Route 53 is a scalable DNS web service that translates domain names to IP addresses, enabling reliable user routing."
    },
    {
        question: "Which AWS service helps you to automatically scale resources based on demand?",
        options: [
            { answer: "A. AWS Elastic Beanstalk", isCorrect: false },
            { answer: "B. Auto Scaling", isCorrect: true },
            { answer: "C. AWS IAM", isCorrect: false },
            { answer: "D. Amazon CloudFront", isCorrect: false }
        ],
        explanation: "Auto Scaling dynamically adjusts capacity to ensure performance and optimize costs."
    },
    {
        question: "What AWS feature allows the use of multiple AWS accounts with a consolidated billing system?",
        options: [
            { answer: "A. AWS Budgets", isCorrect: false },
            { answer: "B. AWS Organizations", isCorrect: true },
            { answer: "C. AWS Billing Console", isCorrect: false },
            { answer: "D. AWS Marketplace", isCorrect: false }
        ],
        explanation: "AWS Organizations enables consolidated billing and centralized management for multiple accounts."
    },
    {
        question: "Which AWS service provides a content delivery network for low-latency global delivery?",
        options: [
            { answer: "A. Amazon ElastiCache", isCorrect: false },
            { answer: "B. Amazon CloudFront", isCorrect: true },
            { answer: "C. Amazon Route 53", isCorrect: false },
            { answer: "D. AWS Global Accelerator", isCorrect: false }
        ],
        explanation: "Amazon CloudFront caches content at Edge Locations for fast, low-latency delivery."
    },
    {
        question: "What AWS service provides virtual desktops as part of its offerings?",
        options: [
            { answer: "A. AWS AppStream", isCorrect: false },
            { answer: "B. AWS WorkSpaces", isCorrect: true },
            { answer: "C. Amazon EC2", isCorrect: false },
            { answer: "D. Amazon S3", isCorrect: false }
        ],
        explanation: "AWS WorkSpaces is a managed virtual desktop service for running cloud-based desktops."
    },
    {
        question: "Which AWS service allows you to track resource changes and configuration compliance?",
        options: [
            { answer: "A. AWS CloudFormation", isCorrect: false },
            { answer: "B. AWS Config", isCorrect: true },
            { answer: "C. AWS Trusted Advisor", isCorrect: false },
            { answer: "D. AWS CloudTrail", isCorrect: false }
        ],
        explanation: "AWS Config helps with compliance and auditing by tracking configuration changes."
    },
    {
        question: "What AWS service provides a relational database that automatically scales based on usage?",
        options: [
            { answer: "A. Amazon DynamoDB", isCorrect: false },
            { answer: "B. Amazon RDS", isCorrect: false },
            { answer: "C. Amazon Aurora", isCorrect: true },
            { answer: "D. AWS Lambda", isCorrect: false }
        ],
        explanation: "Amazon Aurora is a relational database designed for performance and scalability, with automatic scaling capabilities."
    },
    {
        question: "Which AWS service can help identify unusual activity in your AWS account?",
        options: [
            { answer: "A. AWS Shield", isCorrect: false },
            { answer: "B. Amazon Macie", isCorrect: false },
            { answer: "C. Amazon GuardDuty", isCorrect: true },
            { answer: "D. AWS WAF", isCorrect: false }
        ],
        explanation: "Amazon GuardDuty uses machine learning to detect threats and unusual account activity."
    },
    {
        question: "What tool can you use to estimate and compare the cost of running workloads on AWS?",
        options: [
            { answer: "A. AWS Pricing Calculator", isCorrect: true },
            { answer: "B. AWS Cost Explorer", isCorrect: false },
            { answer: "C. AWS TCO Calculator", isCorrect: false },
            { answer: "D. AWS Cost and Usage Report", isCorrect: false }
        ],
        explanation: "The AWS Pricing Calculator provides cost estimates based on workload configurations."
    },
    {
        question: "Which AWS service can be used to securely connect your on-premises network to an AWS VPC?",
        options: [
            { answer: "A. AWS Direct Connect", isCorrect: true },
            { answer: "B. Amazon Route 53", isCorrect: false },
            { answer: "C. AWS Trusted Advisor", isCorrect: false },
            { answer: "D. AWS Snowball", isCorrect: false }
        ],
        explanation: "AWS Direct Connect provides a secure and low-latency connection between on-premises data centers and AWS VPC."
    },
    {
        question: "What is the purpose of AWS Cost Explorer?",
        options: [
            { answer: "A. To monitor and visualize historical spending", isCorrect: true },
            { answer: "B. To calculate pricing for AWS services", isCorrect: false },
            { answer: "C. To create billing alarms", isCorrect: false },
            { answer: "D. To enforce IAM policies", isCorrect: false }
        ],
        explanation: "AWS Cost Explorer helps track historical costs and usage patterns to identify trends."
    },
    {
        question: "Which AWS service is used to run serverless containerized applications?",
        options: [
            { answer: "A. AWS Fargate", isCorrect: true },
            { answer: "B. Amazon ECS", isCorrect: false },
            { answer: "C. AWS Lambda", isCorrect: false },
            { answer: "D. AWS Elastic Beanstalk", isCorrect: false }
        ],
        explanation: "AWS Fargate runs containers without managing the underlying infrastructure, making it serverless."
    },
    {
        question: "Which AWS service allows you to automate the creation of development and deployment pipelines?",
        options: [
            { answer: "A. AWS CodePipeline", isCorrect: true },
            { answer: "B. AWS Elastic Beanstalk", isCorrect: false },
            { answer: "C. AWS OpsWorks", isCorrect: false },
            { answer: "D. AWS CodeDeploy", isCorrect: false }
        ],
        explanation: "AWS CodePipeline automates the build, test, and deploy process for application delivery."
    },
    {
        question: "What type of storage is Amazon S3 best suited for?",
        options: [
            { answer: "A. Object storage", isCorrect: true },
            { answer: "B. Block storage", isCorrect: false },
            { answer: "C. File storage", isCorrect: false },
            { answer: "D. Ephemeral storage", isCorrect: false }
        ],
        explanation: "Amazon S3 is optimized for storing and retrieving any amount of data as objects."
    },
    {
        question: "Which AWS service provides a unified user interface for monitoring and managing AWS resources?",
        options: [
            { answer: "A. AWS Management Console", isCorrect: true },
            { answer: "B. AWS IAM", isCorrect: false },
            { answer: "C. AWS Config", isCorrect: false },
            { answer: "D. AWS CLI", isCorrect: false }
        ],
        explanation: "The AWS Management Console provides a graphical user interface for managing AWS services."
    },
    {
        question: "What is the purpose of AWS Availability Zones?",
        options: [
            { answer: "A. To isolate failure domains within a region", isCorrect: true },
            { answer: "B. To serve as data caching locations", isCorrect: false },
            { answer: "C. To manage DNS records for routing", isCorrect: false },
            { answer: "D. To handle disaster recovery", isCorrect: false }
        ],
        explanation: "Availability Zones are isolated locations within a region that provide high availability and fault tolerance."
    },
    {
        question: "What AWS service allows organizations to track the compliance of resources against their configuration rules?",
        options: [
            { answer: "A. AWS Config", isCorrect: true },
            { answer: "B. AWS CloudTrail", isCorrect: false },
            { answer: "C. AWS Trusted Advisor", isCorrect: false },
            { answer: "D. AWS GuardDuty", isCorrect: false }
        ],
        explanation: "AWS Config evaluates resources for compliance based on specified rules."
    },
    {
        question: "Which AWS service provides a secure, durable, and low-cost solution for backup and archiving?",
        options: [
            { answer: "A. Amazon S3 Glacier", isCorrect: true },
            { answer: "B. Amazon RDS", isCorrect: false },
            { answer: "C. AWS Backup", isCorrect: false },
            { answer: "D. Amazon CloudFront", isCorrect: false }
        ],
        explanation: "Amazon S3 Glacier is designed for long-term backup and archiving with low-cost storage options."
    },
    {
        question: "What is a benefit of using AWS CloudFormation?",
        options: [
            { answer: "A. Automates the provisioning of resources", isCorrect: true },
            { answer: "B. Provides a CDN for application acceleration", isCorrect: false },
            { answer: "C. Manages database migrations", isCorrect: false },
            { answer: "D. Detects security threats", isCorrect: false }
        ],
        explanation: "AWS CloudFormation uses templates to automate the provisioning and management of AWS resources."
    }
];
