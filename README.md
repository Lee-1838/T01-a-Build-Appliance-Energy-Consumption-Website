# T01 + T02 + T03 - Appliance Energy Consumption Website

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
3. Which brands have the greatest number of different models?
4. Which screen technology uses the least power?
5. Does a bigger screen always mean more power?
6. Is there a relationship between star rating and screen size?

### Key findings
- LED-backlit LCD dominates the market, but older LCD models actually have the lowest median power consumption.
- 65" and 55" are the most common screen sizes.
- KOGAN, LG and Samsung offer the widest range of models.
- Power consumption rises with screen size, but varies a lot between models of the same size.
- Star rating is not strongly linked to screen size.

### Storyboard

Link to Miro board: https://miro.com/app/board/uXjVHjBLkWU=/?share_link_id=982331151102

The storyboard below outlines the user experience of the Televisions page.
It follows a simple narrative: introduce the audience, answer six questions
with visualisations, then end with practical advice.

| # | Section | Visualisation | Key message |
|---|---------|---------------|-------------|
| 1 | Audience | — | Everyday consumers in Australia shopping for a new TV; not data experts, want clear and practical answers. |
| 2 | Q1 — What screen technologies are available? | Bar chart (LCD / LCD (LED) / OLED) | LCD (LED) dominates the market with 3,792 models; OLED and older LCD are far less common. |
| 3 | Q2 — What screen sizes are most common? | Bar chart (65" / 55" / 75" / 85" …) | 65" (777) and 55" (762) are the most common sizes; 75" is third. |
| 4 | Q3 — Which brands have the most models? | Bar chart (KOGAN / LG / SAMSUNG ELECTRONICS / SAMSUNG / HISENSE …) | KOGAN (807), LG (723) and SAMSUNG ELECTRONICS (699) lead; choice is concentrated in a few brands. |
| 5 | Q4 — Which screen technology uses the least power? | Bar chart (LCD / LCD (LED) / OLED) | Older LCD has the lowest median power use (71.35), followed by LCD (LED) at 106 and OLED at 112.70. |
| 6 | Q5 — Does a bigger screen always mean more power? | Scatter plot (screensize vs Avg_mode_power) | Power use rises with screen size overall, but varies widely between models of the same size. |
| 7 | Q6 — Is star rating related to screen size? | Scatter plot (screensize vs Star Rating Index) | No clear relationship; star ratings are spread between 2 and 7 at almost every size. |
| 8 | Conclusion — What this means for you | — | Size and technology both matter, but the biggest variation is within each size category. Compare energy ratings, not just screen size. |

**Narrative flow:**
Audience → Market overview (Q1, Q2, Q3) → Energy efficiency (Q4, Q5, Q6) → Practical advice.

**Design notes:**
- Each question is presented as a separate block with a chart and a short explanatory paragraph.
- Charts are screenshots generated in KNIME during T02, annotated with clear titles and captions.
- The page ends with a bullet-point summary aimed at helping consumers make a decision.

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