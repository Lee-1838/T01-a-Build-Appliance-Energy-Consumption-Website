# T01(a) + T03 - Appliance Energy Consumption Website

## Live Site
https://t01-a-build-appliance-energy-consum-ten.vercel.app/

## Project Description
A small interactive website demonstrating HTML, CSS, JavaScript and GitHub skills.
The site has three pages (Home, Televisions, About Us) with JavaScript-based navigation.
The Televisions page presents a data story based on the Australian GEMS TV energy
consumption dataset, explored in T02 using KNIME.

---

## Data Story

### Audience
The visualisations on the Televisions page are aimed at **everyday consumers in Australia**
who are shopping for a new TV. These users are not data experts — they want clear,
practical answers about what is on the market and how to choose an energy-efficient model.

### Questions answered
1. What screen technologies are available in Australia?
2. What screen sizes are most common?
3. Which screen technology uses the least power?
4. Does a bigger screen always mean more power?

### Key findings
- LED-backlit LCD dominates the market, but older LCD models actually have the lowest median power consumption.
- 65" and 55" are the most common screen sizes.
- Power consumption rises with screen size, but varies a lot between models of the same size.

### Storyboard
Link to Miro board: [PASTE YOUR MIRO LINK HERE]

---

## About the Data

**Data source:**  
Australian GEMS (Greenhouse and Energy Minimum Standards) product database —
TV energy consumption records.

**Data processing:**  
Data was cleaned and aggregated in KNIME. Steps included:
- filtering out records with missing values
- removing duplicate models
- filtering to products sold in Australia
- converting screen size to numeric
- grouping by screen technology, screen size and brand to produce summary tables

**Privacy:**  
The dataset contains product registration records, not personal information.
No individual consumer data is included.

**Accuracy and limitations:**  
- The dataset only covers products registered in Australia.
- Some records had missing values and were excluded.
- Power consumption figures are based on standard test conditions and may differ
  from real-world usage.

**Ethics:**  
The data is publicly available and used for educational purposes only.
Findings are presented neutrally and are not intended as product endorsements.

---

## GenAI Usage Notes
- Used GitHub Copilot / ChatGPT to generate initial HTML/CSS/JS structure.
- Modified generated code to match the required colour scheme (matching PowerIcon.png).
- Implemented page-switching logic with JavaScript (showPage function).
- Used ChatGPT to help draft the data story text, which was then reviewed and edited.
- All generated code was reviewed and understood.

## AI Declaration
Parts of this project (code structure, CSS styling, and draft text) were generated
with the assistance of GitHub Copilot and ChatGPT. All final content was reviewed,
edited and understood by the author.

## Reflection
Using GenAI sped up the initial boilerplate setup. However, I found it important to
verify the code and adjust it to meet specific requirements (e.g., active nav
highlighting, hover effects). I now understand how the `classList.toggle` method
works for navigation state, and how to structure a data story for a non-expert audience.

## Author
Lee Kok Kiong - 104399870