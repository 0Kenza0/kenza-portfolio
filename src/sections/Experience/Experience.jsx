import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { DATA } from "../../data/data.jsx";
import { useFadeIn } from "../../hooks/useFadeIn";

export function Experience() {
  const [value, setValue] = useState(0);
  const ref = useFadeIn();

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <section id="experience" className="exp-section">
      <div ref={ref} className="fade-in">
        <h2 className="section-title"> / Expérience</h2>
        <Box sx={{ flexGrow: 1, bgcolor: "transparent", display: "flex", flexDirection: "row", height: "auto", minHeight: 300 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: "var(--lightest-navy)",
              "& .MuiTabs-indicator": { backgroundColor: "var(--green)" },
            }}
          >
            {DATA.experiences.map((e, i) => (
              <Tab
                key={i}
                label={e.company}
                sx={{
                  color: "var(--slate)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  textAlign: "left",
                  alignItems: "flex-start",
                  textTransform: "none",
                  padding: "10px 20px",
                  minHeight: "48px",
                  "&.Mui-selected": { color: "var(--green)" },
                  "&:hover": { color: "var(--green)", backgroundColor: "var(--green-tint)" },
                }}
              />
            ))}
          </Tabs>
          {DATA.experiences.map(
            (e, i) =>
              value === i && (
                <Box key={i} sx={{ p: 3 }}>
                  <span className="exp-role">{e.role} </span>
                  <span className="exp-company">· {e.company}</span>
                  <div className="exp-date">{e.date}</div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </Box>
              )
          )}
        </Box>
      </div>
    </section>
  );
}
