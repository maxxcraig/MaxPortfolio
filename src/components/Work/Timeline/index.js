import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "Jan 2024 - April 2024",
      title: "James Silberrad Brown Center for AI SWE Intern",
      description: [
        "Collaborated on developing <b>AI-powered chat websites</b> for <b>mental health applications</b>, leveraging <b>Django and React</b> to integrate interactive interfaces with AI-driven conversation models.",
        "Fine-tuned machine learning models on <b>mental health datasets</b> using <b>PyTorch</b> and <b>Ollama</b>, optimizing them for accurate, context-sensitive responses.",
        "Tested and evaluated model performance by conducting accuracy assessments with <b>Nautilus</b> and custom evaluation metrics to ensure model reliability and effectiveness." 
      ],
      "expanded": false
    },
    {
      date: "Aug 2021 - May 2022",
      title: "NASA HUNCH",
      description: [
        "Spearheaded the development of <b>magnetic boots</b> by leveraging expertise in manipulating stepper motors and electromagnets using <b>Arduino</b> and <b>C++</b>.",
        "Led the design and implementation of a fully automated system, showcasing technical proficiency and attention to detail.",
        "Achieved notable recognition by emerging as one of the top four teams out of 800 participating groups in the <b>magnetic boots challenge</b>."
      ],
      "expanded": false
    }, 
    {
      date: "Aug 2021 - May 2023",
      title: "Hack Club",
      description: [
        "Pioneering leader in the establishment and leadership of the first Computer Science Club at <b>Chatfield Senior High School</b>, operating under the auspices of the <b>Hack Club</b> organization.",
        "Initiated and cultivated a vibrant community, guiding a diverse group of over <b>20 students</b> in their introduction to coding.",
        "Delivered engaging sessions to teach foundational coding concepts in <b>Java</b>, fostering a passion for computer science among club members.",
        "Demonstrated strong leadership skills by leading a subgroup of <b>five students</b> to participate in a <b>hackathon</b>, where the team showcased their coding skills and problem-solving capabilities."
      ],
      "expanded": false
    }
    
    
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
