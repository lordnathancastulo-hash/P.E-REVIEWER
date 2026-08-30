/* ============================================================
   PE EXAM REVIEWER
   Topics covered:
   1. Physiological Indicators Associated with MVPA
   2. Personal Safety Protocol (Dehydration, Overexertion, Hypothermia, Hyperthermia)
   3. Proper Etiquette and Safety in the Use of Facilities and Equipment
   4. Facilities and Equipment Used in Physical Fitness and Exercises
   ============================================================ */

const QUESTIONS = [

  /* ============ TOPIC 1: PHYSIOLOGICAL INDICATORS & MVPA ============ */
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What does MVPA stand for?",
    choices: [
      "Muscular Volume and Physical Assessment",
      "Moderate to Vigorous Physical Activity",
      "Maximum Vital Pulse Activity",
      "Metabolic Variance in Physical Aptitude"
    ],
    correct: 1,
    explanation: "MVPA stands for Moderate to Vigorous Physical Activity, a term used to describe exercise intensity levels that raise your heart rate and breathing."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "According to the World Health Organization, how many minutes of MVPA should teens engage in daily?",
    choices: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"],
    correct: 2,
    explanation: "The WHO recommends that teens engage in MVPA for at least 60 minutes daily, while adults should aim for 150 minutes weekly of accumulated activity."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "Per the World Health Organization guideline discussed in class, how many minutes should adults engage in MVPA?",
    choices: ["60 minutes daily", "100 minutes daily", "150 minutes daily", "200 minutes daily"],
    correct: 2,
    explanation: "The lesson states adults must engage in MVPA for 150 minutes (this is generally spread across a week, e.g., 150 minutes per week of moderate activity)."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "The word 'Physiological' comes from Greek roots. What does 'Physis' mean?",
    choices: [
      "The study of something",
      "Relating to a process",
      "The way something naturally grows and functions",
      "To point out or reveal"
    ],
    correct: 2,
    explanation: "'Physis' (φύσις) is Greek for the way something naturally grows and functions. Combined with '-logia' (study of) and '-al' (relating to), we get 'physiological.'"
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "In the Greek root breakdown of 'physiological,' what does the suffix '-logia' mean?",
    choices: ["Relating to", "Study of", "To measure", "To grow"],
    correct: 1,
    explanation: "'-Logia' (λογία) means 'study of.' So 'physiological' literally combines 'physis' (natural function) + 'logia' (study of) + '-al' (relating to)."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What does 'physiological' mean as defined in the lesson?",
    choices: [
      "Relating to the size and shape of the body",
      "Relating to the normal functions and processes of a living body",
      "Relating to muscle strength only",
      "Relating to psychological stress responses"
    ],
    correct: 1,
    explanation: "Physiological means 'relating to the normal functions and processes of a living body,' such as breathing, heart beating, sweating, digesting food, sleeping, and blood circulation."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "Which of the following is NOT listed as an example of a physiological process?",
    choices: ["Breathing", "Digesting food", "Blood circulation", "Studying for an exam"],
    correct: 3,
    explanation: "Studying for an exam is a cognitive/behavioral activity, not a physiological process. Breathing, digesting food, and blood circulation are all normal bodily functions covered under 'physiological.'"
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "The word 'Indicator' comes from the Latin word 'Indicare.' What does it mean?",
    choices: [
      "To point out, show, or reveal",
      "To measure precisely",
      "To grow naturally",
      "To exercise vigorously"
    ],
    correct: 0,
    explanation: "'Indicare' is Latin for 'to point out, show, or reveal.' An indicator is something that points out or shows information."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "How is a 'physiological indicator' best defined?",
    choices: [
      "A subjective feeling of tiredness after exercise",
      "Any measurable body signal that reveals how well your body's natural systems are working",
      "A piece of gym equipment used to track workouts",
      "A rule set by WHO for minimum exercise time"
    ],
    correct: 1,
    explanation: "A physiological indicator is any measurable body signal that reveals how well your body's natural systems are working, such as heart rate, blood oxygen level, respiratory rate, hydration level, and pain level."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "Which of the following is an example of a physiological indicator shown in the lesson?",
    choices: ["Blood Oxygen Level", "Favorite sport", "Shoe size", "Team jersey color"],
    correct: 0,
    explanation: "Blood Oxygen Level, along with Heart Rate, Respiratory Rate, Hydration Level, and Pain Level, are all examples of measurable physiological indicators shown in the lesson."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What is Heart Rate (Pulse Rate) defined as?",
    choices: [
      "The amount of oxygen carried in the blood",
      "The number of times your heart beats per minute",
      "The number of breaths taken per minute",
      "The maximum safe exercise duration"
    ],
    correct: 1,
    explanation: "Heart rate (pulse rate) measures the number of times your heart beats per minute, and it changes depending on physical activity, emotions, or threats to safety."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What is the normal Resting Heart Rate (RHR) range for the average adult?",
    choices: ["30-50 BPM", "60-100 BPM", "110-130 BPM", "140-160 BPM"],
    correct: 1,
    explanation: "A normal resting heart rate is 60-100 BPM (Beats Per Minute). Athletes may have a lower RHR (40-60 BPM) because their hearts pump blood more efficiently."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "Why might athletes have a lower Resting Heart Rate (40-60 BPM) than the average person?",
    choices: [
      "Their hearts pump blood more efficiently",
      "They eat more food than average people",
      "They have smaller hearts than average people",
      "They sleep less than average people"
    ],
    correct: 0,
    explanation: "Athletes often have a lower RHR because their hearts pump blood more efficiently, needing fewer beats per minute to circulate the same amount of blood."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "According to the lesson, how long should you sit calmly before measuring your Resting Heart Rate?",
    choices: ["1-2 minutes", "5-10 minutes", "15-20 minutes", "30 minutes"],
    correct: 1,
    explanation: "To measure RHR accurately, you should sit calmly for at least 5-10 minutes before taking your pulse, so your heart rate reflects a true resting state."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "Which fingers should you use to check your pulse, and which should you avoid?",
    choices: [
      "Use your thumb only, avoid your index finger",
      "Use your point (index) and middle fingers, avoid your thumb",
      "Use your ring finger and pinky, avoid your middle finger",
      "Any finger may be used, including the thumb"
    ],
    correct: 1,
    explanation: "You should use your point (index) and middle fingers on your wrist to count your pulse. Never use your thumb, because it has its own pulse and will give you an inaccurate reading."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: Mica counts 8 pulse beats in 10 seconds while calmly seated. What is her Resting Heart Rate?",
    choices: ["8 BPM", "14 BPM", "48 BPM", "80 BPM"],
    correct: 2,
    explanation: "To find RHR from a 10-second count, multiply by 6: 8 beats x 6 = 48 BPM. This matches the example given in the lesson (8 beats x 6 = 48)."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "When is it ideal to take your Resting Heart Rate, according to the lesson?",
    choices: [
      "Right after an intense workout",
      "During the morning after you wake up",
      "Right before going to sleep",
      "In the middle of a meal"
    ],
    correct: 1,
    explanation: "It is ideal to take your RHR in the morning right after you wake up, before you have engaged in any activity that could raise your heart rate."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What is the formula for Maximum Heart Rate (MHR)?",
    choices: ["220 + Age", "220 - Age", "200 - Age", "Age x 2.2"],
    correct: 1,
    explanation: "MHR is calculated using the formula 220 - Age. For example, for an 18-year-old: 220 - 18 = 202 BPM."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: Carlo is 20 years old and wants to know his Maximum Heart Rate before starting an intense workout program. What is his MHR?",
    choices: ["180 BPM", "190 BPM", "200 BPM", "220 BPM"],
    correct: 2,
    explanation: "Using MHR = 220 - Age: 220 - 20 = 200 BPM. This is the maximum number of times Carlo's heart should beat per minute during exercise."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What is Target Heart Rate (THR)?",
    choices: [
      "The heart rate reached only during sleep",
      "The ideal heart rate range for effective and safe exercise",
      "The heart rate measured only at rest",
      "The absolute upper limit the heart can survive"
    ],
    correct: 1,
    explanation: "Target Heart Rate (THR) is the ideal heart rate range for effective and safe exercise, calculated as a percentage of your Maximum Heart Rate."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What percentage of MHR represents Moderate Exercise intensity in the basic THR formula?",
    choices: ["MHR x .40", "MHR x .60", "MHR x .75", "MHR x .90"],
    correct: 1,
    explanation: "Moderate exercise intensity is calculated as MHR x .60, while Vigorous exercise intensity is calculated as MHR x .90."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: Using the basic THR formula, a person with an MHR of 202 BPM wants to know their vigorous-intensity target heart rate (MHR x .90). What is it?",
    choices: ["121.2 BPM", "138.6 BPM", "181.8 BPM", "202 BPM"],
    correct: 2,
    explanation: "202 x .90 = 181.8 BPM. The lesson's own example computed 202 x .90 = 182 (rounded), matching the vigorous-exercise target heart rate."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What additional value does the Personal THR (Karvonen-style) formula use that the basic THR formula does not?",
    choices: ["Body weight", "Resting Heart Rate (RHR)", "Number of hours slept", "Shoe size"],
    correct: 1,
    explanation: "The Personal THR formula subtracts RHR from MHR first: (MHR - RHR) x .60 or x .90. This personalizes the target based on your own resting heart rate, unlike the basic formula."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: Jaya has an MHR of 202 BPM and an RHR of 48 BPM. Using the Personal THR formula for moderate exercise, (MHR - RHR) x .60, what is her personal target heart rate?",
    choices: ["92.4 BPM", "121.2 BPM", "138.6 BPM", "154 BPM"],
    correct: 0,
    explanation: "(202 - 48) x .60 = 154 x .60 = 92.4 BPM. This matches the worked example in the lesson exactly."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What foundational principle should always be considered when planning an individual's exercise program?",
    choices: [
      "Principle of Competition",
      "Principle of Individuality",
      "Principle of Uniformity",
      "Principle of Repetition"
    ],
    correct: 1,
    explanation: "The lesson emphasizes the Principle of Individuality: 'No two individuals are the same; it's not apples to apples,' meaning exercise plans should be tailored to each person."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: Two classmates follow the exact same workout plan, but one gets tired much faster than the other. What PE principle explains this difference?",
    choices: [
      "Principle of Individuality — people respond differently based on their own fitness and body",
      "Both students are simply not trying hard enough",
      "The workout plan must be broken",
      "Only their shoes are different"
    ],
    correct: 0,
    explanation: "This reflects the Principle of Individuality: no two individuals are the same, so fitness responses to the same program will naturally vary from person to person."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What defines a Sedentary Lifestyle?",
    choices: [
      "Regularly moving the body through exercise or sports",
      "Very little physical activity",
      "Only doing vigorous exercise",
      "Playing sports professionally"
    ],
    correct: 1,
    explanation: "A Sedentary Lifestyle is defined as having very little physical activity, in contrast to an Active Lifestyle."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What defines an Active Lifestyle?",
    choices: [
      "Sitting for most of the day with minimal movement",
      "Regularly moving the body through exercise, sports, or daily physical activities to stay healthy",
      "Avoiding all forms of physical activity",
      "Only exercising once a year"
    ],
    correct: 1,
    explanation: "An Active Lifestyle means regularly moving the body through exercise, sports, or daily physical activities to stay healthy — the opposite of a sedentary lifestyle."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "recall",
    question: "What is Rate of Perceived Exertion (RPE)?",
    choices: [
      "A device that measures oxygen in the blood",
      "A subjective scale used to measure how hard a person feels they are exercising",
      "A formula for calculating age-based maximum heart rate",
      "A rule requiring 60 minutes of daily exercise"
    ],
    correct: 1,
    explanation: "RPE is a subjective scale used to measure how hard a person feels they are exercising. Instead of using a heart rate monitor, you rate your effort based on how your body feels."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: While jogging without a heart rate monitor, Anton is only breathing a little faster and could still hold a full conversation easily. On the RPE 10-point scale, which intensity level best matches this?",
    choices: [
      "0 — Rest, no exertion",
      "2-3 — Very light to light, still comfortable",
      "7-8 — Very hard, can barely speak",
      "10 — Maximal exertion, cannot keep going"
    ],
    correct: 1,
    explanation: "Being able to talk easily with only slight effort corresponds to a low RPE score (around 2-3, 'very light' to 'light'), where breathing is just starting to be noticed but conversation stays easy."
  },
  {
    topic: "Physiological Indicators & MVPA",
    type: "situational",
    question: "Situational: On the Borg RPE scale, a runner reports she can only say a few words at a time because her breathing is very challenging. Which Borg RPE range best fits her effort?",
    choices: ["6 (No exertion)", "9-10 (Very light)", "17-18 (Very hard)", "20 (Maximal exertion)"],
    correct: 2,
    explanation: "Borg RPE 17-18 ('Very Hard') describes effort that is very strenuous and difficult to continue for long, matching breathing that is very challenging and speech limited to a few words."
  },

  /* ============ TOPIC 2: PERSONAL SAFETY PROTOCOL ============ */
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "What does Dehydration mean, as defined in the Personal Safety Protocol lesson?",
    choices: ["Too much heat", "Too little water", "Too much effort", "Too much cold"],
    correct: 1,
    explanation: "Dehydration means too little water — the body does not have enough water, which can cause thirst, dry mouth, dizziness, and weakness."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "What does Overexertion mean?",
    choices: ["Too little water", "Too much effort", "Too much heat", "Too much cold"],
    correct: 1,
    explanation: "Overexertion means too much effort — the body is working too hard or beyond its limits, which can lead to extreme tiredness and muscle pain."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "What does Hyperthermia mean?",
    choices: ["Too little water", "Too much effort", "Too much heat", "Too much cold"],
    correct: 2,
    explanation: "Hyperthermia means too much heat — the body becomes dangerously hot, which can cause heavy sweating, headache, dizziness, nausea, and confusion."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "What does Hypothermia mean?",
    choices: ["Too little water", "Too much effort", "Too much heat", "Too much cold"],
    correct: 3,
    explanation: "Hypothermia means too much cold — the body becomes dangerously cold, which can cause shivering, numbness, confusion, and weakness."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "Which of these is a common sign of Dehydration?",
    choices: ["Shivering", "Dry mouth", "Heavy sweating", "Numbness"],
    correct: 1,
    explanation: "Common signs of dehydration include thirst, dry mouth, dizziness, and weakness — the body signaling it does not have enough water."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "Which of these is a common sign of Overexertion?",
    choices: ["Shivering", "Muscle pain and difficulty breathing", "Confusion from cold", "Dry mouth only"],
    correct: 1,
    explanation: "Common signs of overexertion include extreme tiredness, muscle pain, dizziness, and difficulty breathing, since the body is working beyond its limits."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "Which set of signs points to Hyperthermia rather than Hypothermia?",
    choices: [
      "Shivering, numbness, confusion, weakness",
      "Heavy sweating, headache, dizziness, nausea, confusion",
      "Thirst, dry mouth, dizziness, weakness",
      "Extreme tiredness, muscle pain, difficulty breathing"
    ],
    correct: 1,
    explanation: "Heavy sweating, headache, dizziness, nausea, and confusion are the signs of Hyperthermia (too much heat), as opposed to Hypothermia's shivering and numbness from cold."
  },
  {
    topic: "Personal Safety Protocol",
    type: "situational",
    question: "Situational: During a hot afternoon PE class, Reign starts sweating heavily, gets a headache, feels dizzy, and becomes confused. What condition is she most likely experiencing?",
    choices: ["Dehydration", "Overexertion", "Hyperthermia", "Hypothermia"],
    correct: 2,
    explanation: "Heavy sweating, headache, dizziness, and confusion in a hot environment are the classic signs of Hyperthermia — the body becoming dangerously hot."
  },
  {
    topic: "Personal Safety Protocol",
    type: "situational",
    question: "Situational: While practicing outdoors on a cold, rainy day, Miguel starts shivering uncontrollably, his hands feel numb, and he seems confused. What should his classmates suspect?",
    choices: ["Dehydration", "Overexertion", "Hyperthermia", "Hypothermia"],
    correct: 3,
    explanation: "Shivering, numbness, and confusion in cold, wet conditions point to Hypothermia — the body becoming dangerously cold."
  },
  {
    topic: "Personal Safety Protocol",
    type: "situational",
    question: "Situational: What is the correct first response if a classmate shows early signs of Dehydration during practice?",
    choices: [
      "Push them to keep practicing so they sweat it out",
      "Stop, rest in a cool place, and drink water",
      "Move them somewhere warmer and cover them in blankets",
      "Ignore it since dehydration is not serious"
    ],
    correct: 1,
    explanation: "For Dehydration, the correct response is to stop the activity, rest in a cool place, and drink water to replace lost fluids."
  },
  {
    topic: "Personal Safety Protocol",
    type: "situational",
    question: "Situational: A teammate shows signs of Hyperthermia during a hot outdoor game. What is the appropriate action?",
    choices: [
      "Keep them moving to sweat out the heat",
      "Stop activity, move to a cool place, and cool the body",
      "Give them more layers of clothing",
      "Have them do more warm-up exercises"
    ],
    correct: 1,
    explanation: "For Hyperthermia, you should stop the activity, move the person to a cool place, and actively cool the body down (e.g., with water or fanning) to bring the body temperature down safely."
  },
  {
    topic: "Personal Safety Protocol",
    type: "situational",
    question: "Situational: A classmate exposed to cold rain begins shivering and their clothes are soaked. What is the recommended action for suspected Hypothermia?",
    choices: [
      "Move them to a warm place, remove wet clothing, and warm the body gradually",
      "Have them drink ice water quickly",
      "Encourage them to run faster to warm up",
      "Leave the wet clothes on to preserve body heat"
    ],
    correct: 0,
    explanation: "For Hypothermia, move the person to a warm place, remove wet clothing, and warm the body gradually — wet clothing accelerates heat loss and must be removed."
  },
  {
    topic: "Personal Safety Protocol",
    type: "recall",
    question: "What is the recommended action for someone showing signs of Overexertion?",
    choices: [
      "Push through the pain and finish the activity",
      "Stop the activity, rest, and recover",
      "Drink large amounts of cold water only",
      "Immediately begin a more intense activity"
    ],
    correct: 1,
    explanation: "For Overexertion, the recommended response is to stop the activity, rest, and allow the body to recover before resuming any physical activity."
  },

  /* ============ TOPIC 3: PROTOCOLS, ETIQUETTE & SAFETY IN FACILITIES ============ */
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "How is 'Etiquette' defined in the lesson?",
    choices: [
      "A type of physical exercise equipment",
      "The conduct or procedure required by good breeding or prescribed by authority to be observed in social or official life",
      "A medical condition caused by overexertion",
      "A formula for calculating heart rate"
    ],
    correct: 1,
    explanation: "Etiquette is defined as the conduct or procedure required by good breeding or prescribed by authority to be observed in social or official life — essentially, proper behavior expected in a given setting."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "Which of the following is one of the 8 tips to stay safe before, during, and after physical activity?",
    choices: [
      "Wear the heaviest clothing available",
      "Wear comfortable clothing that allows you to move easily and stay cool",
      "Skip meals entirely before exercising",
      "Avoid resting no matter how tired you feel"
    ],
    correct: 1,
    explanation: "Tip #1 is to wear comfortable clothing — choose clothes that allow you to move easily and stay cool during physical activity."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "Why does the lesson recommend using appropriate gear (like proper shoes) for an activity?",
    choices: [
      "To look fashionable during exercise",
      "To stay safe and perform well",
      "Gear has no real effect on safety",
      "To slow down your movement on purpose"
    ],
    correct: 1,
    explanation: "Tip #2 states that using the right shoes and equipment helps you stay safe and perform well during physical activity."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "According to the safety protocol tips, why is taking a warm-up and cool-down important?",
    choices: [
      "It has no real benefit but is traditional",
      "It lowers the risk of strains and sprains",
      "It increases the risk of injury",
      "It replaces the need for water breaks"
    ],
    correct: 1,
    explanation: "Taking a warm-up and cool-down before and after activity lowers the risk of strains and sprains, preparing the body for exercise and helping it recover afterward."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What is Tip #4 in the 'Stay Safe, Stay Strong' protocol list?",
    choices: [
      "Take appropriate breaks during the activity",
      "Avoid drinking water while exercising",
      "Exercise without checking the weather",
      "Wear the same clothes every day"
    ],
    correct: 0,
    explanation: "Tip #4 is to take appropriate breaks during the activity — resting when needed helps avoid getting tired or overexerted."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "According to Tip #5, what should you eat before physical activity to give you stamina?",
    choices: [
      "A heavy, fatty meal",
      "Light food like healthy fruits or snacks",
      "Nothing at all, always exercise on an empty stomach",
      "Only sugary drinks"
    ],
    correct: 1,
    explanation: "Tip #5 recommends eating light food — choosing healthy, light meals or snacks to fuel your body and give you stamina before activity."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "According to Tip #6, when should you drink water in relation to exercise?",
    choices: [
      "Only after exercise",
      "Only before exercise",
      "Before, during, and after exercise",
      "Water is not necessary during exercise"
    ],
    correct: 2,
    explanation: "Tip #6, 'Be Hydrated,' recommends drinking water before, during, and after exercise to keep your body working properly."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What does Tip #7 advise regarding weather and environmental conditions?",
    choices: [
      "Ignore the weather and exercise regardless",
      "Check the weather and adjust your activity for your safety",
      "Only exercise indoors year-round",
      "Weather has no effect on exercise safety"
    ],
    correct: 1,
    explanation: "Tip #7 advises being aware of the weather and environmental conditions — checking the weather and surroundings and adjusting activity accordingly for safety."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What does Tip #8, 'Listen to your body,' advise you to do?",
    choices: [
      "Ignore any pain to build toughness",
      "Pay attention to how you feel and stop if you feel pain, dizziness, or unusual fatigue",
      "Only listen to your coach, never your own body",
      "Push through dizziness until the activity ends"
    ],
    correct: 1,
    explanation: "Tip #8 advises paying attention to how you feel, and stopping the activity if you feel pain, dizziness, or unusual fatigue."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: Before starting a run, Bea puts on a light, breathable outfit and proper running shoes, and takes five minutes to stretch and warm up. Which safety tips is she following?",
    choices: [
      "Tips 1, 2, and 3 (comfortable clothing, appropriate gear, warm-up/cool-down)",
      "Tips 6 and 7 only (hydration and weather)",
      "No safety tips, this is unrelated to protocol",
      "Only Tip 8 (listen to your body)"
    ],
    correct: 0,
    explanation: "Wearing comfortable clothing (Tip 1), using appropriate gear/shoes (Tip 2), and warming up (Tip 3) are all safety protocols being correctly followed here."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: Midway through a long run, Ken starts feeling unusual dizziness and decides to stop and tell his coach instead of pushing through. Which safety principle is he applying?",
    choices: [
      "Taking appropriate breaks and listening to his body",
      "Ignoring proper etiquette",
      "Overexerting himself intentionally",
      "Skipping his warm-up"
    ],
    correct: 0,
    explanation: "Stopping when feeling dizzy and reporting it demonstrates 'Listen to your body' (Tip 8) combined with taking appropriate breaks (Tip 4) — both key personal safety protocols."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What is the first of the three Etiquette and Safety Standards in Facilities?",
    choices: ["Be mindful of others", "Know the rules", "Maintain cleanliness and orderliness", "Bring your own equipment"],
    correct: 1,
    explanation: "'Know the Rules' is the first standard: read the rules and regulations of the place, and ask the information desk or person in-charge if you have questions."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "If you are unsure about the rules of a sports facility, what does the lesson say you should do?",
    choices: [
      "Guess and proceed anyway",
      "Ask the information desk personnel or the person in-charge",
      "Leave the facility immediately",
      "Wait for someone else to ask first"
    ],
    correct: 1,
    explanation: "The lesson advises that if you have any questions about the rules, you must ask the information desk personnel or the person in-charge."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "Which standard involves keeping a facility clean, such as using trash/recycling bins?",
    choices: ["Know the rules", "Maintain cleanliness and orderliness", "Be mindful to others", "Take good care of the equipment"],
    correct: 1,
    explanation: "'Maintain Cleanliness and Orderliness' is the second standard: cleanliness is one basic etiquette we must observe at all times, such as using the proper trash/recycling bins."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What does 'Be Mindful to Others' mean as an etiquette standard in facilities?",
    choices: [
      "Always consider other people's time and space, and do not distract their activity",
      "Talk loudly so everyone can hear your conversation",
      "Take over equipment others are using",
      "Ignore other facility users completely"
    ],
    correct: 0,
    explanation: "'Be Mindful to Others' means always considering other people's time and space, and not distracting their activity — for example, not talking loudly near someone who is concentrating."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: Upon entering a new recreation center, Diego reads the posted rules and asks the front desk staff a question about equipment use before starting. Which etiquette standard is he demonstrating?",
    choices: ["Know the rules", "Maintain cleanliness and orderliness", "Be mindful to others", "Proper handling of equipment"],
    correct: 0,
    explanation: "Reading posted rules and asking staff questions demonstrates 'Know the Rules' — being knowledgeable about the regulations of the place before using it."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: After finishing a snack at the gym, Lourdes properly disposes of her wrapper in the recycling bin and wipes down the bench she used. Which standard does this reflect?",
    choices: ["Know the rules", "Maintain cleanliness and orderliness", "Be mindful to others", "None of the above"],
    correct: 1,
    explanation: "Properly disposing of trash and wiping down used equipment reflects 'Maintain Cleanliness and Orderliness,' a basic etiquette that must be observed at all times."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: While someone is reading quietly in a shared recreation area, another visitor plays loud music on a speaker nearby. What etiquette standard is being violated?",
    choices: ["Know the rules", "Maintain cleanliness and orderliness", "Be mindful to others", "Proper handling of equipment"],
    correct: 2,
    explanation: "Playing loud music near someone reading violates 'Be Mindful to Others' — always consider other people's time and space, and do not distract their activity."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What is the first step in the Proper Handling of Equipment guideline?",
    choices: [
      "Take good care of the equipment",
      "Read the manual carefully before using any equipment",
      "Be alert and aware on how to use it",
      "Return the equipment immediately after use"
    ],
    correct: 1,
    explanation: "Step 1 is to 'Read the Manual Carefully' — before using any equipment, you must read the manual guide to know its proper use."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "According to 'Be Alert and Aware on How to Use It,' what should you do if you encounter a problem with the equipment?",
    choices: [
      "Ignore it and continue using it",
      "Report it immediately",
      "Fix it yourself without telling anyone",
      "Throw the equipment away"
    ],
    correct: 1,
    explanation: "You must be alert in using certain equipment, and if you encounter any problems, you must report them immediately to the person in-charge."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "recall",
    question: "What does 'Take Good Care of the Equipment' mean according to the lesson?",
    choices: [
      "You must maintain its standard and keep it clean after usage",
      "You can use it however you want since it is not yours",
      "You should never touch the equipment",
      "You must replace it with new equipment every time"
    ],
    correct: 0,
    explanation: "Taking good care of equipment means you must maintain its standard and ensure it is clean after usage, reflecting the theme 'Be Prepared. Be Alert. Be Responsible.'"
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: Before using a treadmill for the first time, Carla looks up and reads the operating manual to understand its functions and safety features. What guideline is she following?",
    choices: [
      "Read the manual carefully",
      "Be mindful to others",
      "Maintain cleanliness and orderliness",
      "Know the rules"
    ],
    correct: 0,
    explanation: "Reading the manual before using unfamiliar equipment follows the first step of 'Proper Handling of Equipment': read the manual carefully to know its proper use."
  },
  {
    topic: "Etiquette & Safety in Facilities",
    type: "situational",
    question: "Situational: While using a camera-like device for a class activity, Noel notices it is malfunctioning. What is the correct response according to proper equipment handling?",
    choices: [
      "Keep using it and hope it fixes itself",
      "Report it immediately to the person in-charge",
      "Hide the malfunction from others",
      "Throw it away and get a replacement without telling anyone"
    ],
    correct: 1,
    explanation: "Being alert and aware means reporting any problems with equipment immediately, so it can be addressed properly instead of continuing to use faulty equipment."
  },

  /* ============ TOPIC 4: FACILITIES AND EQUIPMENT ============ */
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which facility 'contributes to the health and well-being of the communities that surround them,' often featuring open green spaces?",
    choices: ["Gym", "Parks", "Covered Court", "Recreation Center"],
    correct: 1,
    explanation: "Parks contribute to the health and well-being of the communities that surround them, offering outdoor spaces for physical activity."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which facility is described as 'a building that is open to the public where meetings are held, sports are played, and there are activities for young and old people'?",
    choices: ["Home", "Recreation Center", "Gym", "Covered Court"],
    correct: 1,
    explanation: "A Recreation Center is a building open to the public where meetings are held, sports are played, and activities are available for people of all ages."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which facility is 'a place wherein you can do your physical activities and exercise whenever you want'?",
    choices: ["Gym", "Home", "Covered Court", "Parks"],
    correct: 1,
    explanation: "Home is described as a place wherein you can do physical activities and exercise whenever you want, offering flexibility and convenience."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which facility 'is usually covered and is found in athletic and fitness centers,' catering to fitness purposes like body shaping and muscle strengthening?",
    choices: ["Parks", "Home", "Gym", "Covered Court"],
    correct: 2,
    explanation: "A Gym is usually a covered facility found in athletic and fitness centers, catering to purposes like body shaping, muscle strengthening, and discipline."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which facility is described as 'one of the common facilities where physical activities can be done, a playing surface with a basket at the end'?",
    choices: ["Gym", "Recreation Center", "Covered Court", "Home"],
    correct: 2,
    explanation: "A Covered Court is a playing surface with a basket at the end, one of the common facilities used for physical activities or exercises."
  },
  {
    topic: "Facilities & Equipment",
    type: "situational",
    question: "Situational: Ella wants to do yoga every morning without traveling anywhere, using whatever open space is available in her house. Which facility is she using?",
    choices: ["Recreation Center", "Home", "Covered Court", "Gym"],
    correct: 1,
    explanation: "Doing physical activity within one's own house matches the definition of Home as a facility — a place where you can exercise whenever you want."
  },
  {
    topic: "Facilities & Equipment",
    type: "situational",
    question: "Situational: A group of students wants to play basketball on a surface that has a roof to protect them from rain, with hoops on both ends. Which facility should they use?",
    choices: ["Parks", "Home", "Covered Court", "Recreation Center"],
    correct: 2,
    explanation: "A Covered Court is a roofed playing surface with a basket at the end, ideal for basketball regardless of weather."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "What equipment is described as 'small bags filled with any of several materials, often used for games,' commonly tossed into holes for points?",
    choices: ["Balloons", "Beanbags", "Pylons", "Scarves"],
    correct: 1,
    explanation: "Beanbags are small bags filled with materials, often used for games such as tossing them into a box with holes worth different point values."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment is commonly used with the game 'Balloon Toss' and develops throwing and catching skills?",
    choices: ["Beanbags", "Balloons", "Hula Hoops", "Skipping Ropes"],
    correct: 1,
    explanation: "Balloons are commonly used with a physical activity named Balloon Toss, developing skills in throwing/tossing a balloon and catching it."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment develops coordination, balance, mobility, and hand/eye coordination through running and jumping activities?",
    choices: ["Hula Hoops", "Pylons", "Dumbbell", "Plastic Hockey Stick"],
    correct: 0,
    explanation: "Hula Hoops are usually made of plastic and used for coordination, balance, mobility, kicking, hand/eye coordination, running, and jumping."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment is made of strings, wool, and rope, used to strengthen the upper and lower body and burn calories?",
    choices: ["Scarves", "Hula Hoops", "Skipping Ropes", "Measuring Object"],
    correct: 2,
    explanation: "Skipping Ropes are made of strings, wool, and rope, and strengthen the upper and lower body while burning a lot of calories."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment example includes a stick, rope, measuring tape, or paper, and is used to measure distances or dimensions?",
    choices: ["Measuring Object", "Pylons", "Beanbags", "Chairs"],
    correct: 0,
    explanation: "A Measuring Object can be a stick, rope, measuring tape, or paper, used to measure things like distance during physical activities."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment can be a tissue, handkerchief, paper towel, or socks (if you don't have a real one), and helps develop motor skills?",
    choices: ["Scarves", "Pylons", "Chairs", "Dumbbell"],
    correct: 0,
    explanation: "Scarves can be a tissue, handkerchief, paper towel, or socks if a real scarf isn't available, and they help develop one's motor skills."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment helps develop movement skills and is also referred to using buckets, rocks, or chalk as substitutes?",
    choices: ["Pylons", "Balloons", "Beanbags", "Skipping Ropes"],
    correct: 0,
    explanation: "Pylons (also called Buckets, Rocks, or Chalk as substitutes) help develop movement skills, often used as markers for drills."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment helps develop hand-eye coordination and timing when used in physical activities?",
    choices: ["Plastic Hockey Stick", "Dumbbell", "Chairs", "Measuring Object"],
    correct: 0,
    explanation: "The Plastic Hockey Stick helps develop hand-eye coordination and timing when used in physical activity."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which household item is described as a common piece of equipment in your house that can be used in many physical activities and exercises?",
    choices: ["Chairs", "Balloons", "Beanbags", "Pylons"],
    correct: 0,
    explanation: "Chairs are described as a common piece of equipment found in the house that can be used in many physical activities and exercises."
  },
  {
    topic: "Facilities & Equipment",
    type: "recall",
    question: "Which equipment, usually made of metal with cast iron, is commonly used in gyms and works on the shoulders, chest, biceps, and triceps?",
    choices: ["Dumbbell", "Pylons", "Measuring Object", "Skipping Ropes"],
    correct: 0,
    explanation: "A Dumbbell is usually made of metal with cast iron, commonly used in gyms or at home, and works on the shoulders, chest, biceps, and triceps."
  },
  {
    topic: "Facilities & Equipment",
    type: "situational",
    question: "Situational: A PE teacher wants students to practice jumping and improve their coordination and balance using a simple plastic circular object spun around the waist. Which equipment should be used?",
    choices: ["Hula Hoops", "Dumbbell", "Chairs", "Pylons"],
    correct: 0,
    explanation: "Hula Hoops are ideal here — they are used for coordination, balance, mobility, kicking, hand/eye coordination, running, and jumping."
  },
  {
    topic: "Facilities & Equipment",
    type: "situational",
    question: "Situational: A student wants an at-home activity to strengthen both the upper and lower body while burning a significant number of calories, using only string-based equipment. What should they use?",
    choices: ["Skipping Ropes", "Beanbags", "Scarves", "Measuring Object"],
    correct: 0,
    explanation: "Skipping Ropes are made of strings, wool, and rope, and are specifically noted for strengthening the upper and lower body and burning a lot of calories."
  },
  {
    topic: "Facilities & Equipment",
    type: "situational",
    question: "Situational: For a drill that requires markers to guide students through a running pattern, but no official pylons are available, what could be used as a substitute according to the lesson?",
    choices: ["Buckets, rocks, or chalk", "Dumbbells", "Skipping ropes", "Hula hoops"],
    correct: 0,
    explanation: "The lesson explicitly lists Pylons as also being referred to as Buckets, Rocks, or Chalk — all valid substitutes for movement-skill drills."
  }
];

/* ============ APP STATE ============ */
let state = {
  order: [],
  currentIndex: 0,
  answers: [],
  selectedTopics: null,
  startTime: null
};

const TOPICS = [...new Set(QUESTIONS.map(q => q.topic))];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============ SCREENS ============ */
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

function showScreen(el) {
  [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.add("hidden"));
  el.classList.remove("hidden");
}

/* ============ START SCREEN SETUP ============ */
function buildTopicCheckboxes() {
  const container = document.getElementById("topic-list");
  container.innerHTML = "";
  TOPICS.forEach((topic, i) => {
    const count = QUESTIONS.filter(q => q.topic === topic).length;
    const id = `topic-${i}`;
    const wrapper = document.createElement("label");
    wrapper.className = "topic-item";
    wrapper.setAttribute("for", id);
    wrapper.innerHTML = `
      <input type="checkbox" id="${id}" value="${topic}" checked />
      <span class="topic-name">${topic}</span>
      <span class="topic-count">${count} items</span>
    `;
    container.appendChild(wrapper);
  });
  document.getElementById("total-count").textContent = QUESTIONS.length;
}

function getSelectedTopics() {
  const boxes = document.querySelectorAll("#topic-list input[type=checkbox]");
  const selected = [...boxes].filter(b => b.checked).map(b => b.value);
  return selected.length ? selected : TOPICS;
}

function updateStartCount() {
  const selected = getSelectedTopics();
  const n = QUESTIONS.filter(q => selected.includes(q.topic)).length;
  document.getElementById("selected-count").textContent = n;
}

/* ============ QUIZ FLOW ============ */
function startQuiz() {
  const selected = getSelectedTopics();
  let pool = QUESTIONS.filter(q => selected.includes(q.topic));
  pool = shuffle(pool);
  state.order = pool;
  state.currentIndex = 0;
  state.answers = new Array(pool.length).fill(null);
  state.startTime = Date.now();
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = state.order[state.currentIndex];
  const total = state.order.length;
  const idx = state.currentIndex;

  document.getElementById("progress-text").textContent = `Question ${idx + 1} of ${total}`;
  document.getElementById("progress-fill").style.width = `${((idx) / total) * 100}%`;
  document.getElementById("topic-badge").textContent = q.topic;
  document.getElementById("type-badge").textContent = q.type === "situational" ? "Situational" : "Recall";
  document.getElementById("type-badge").className = "badge " + (q.type === "situational" ? "badge-situational" : "badge-recall");
  document.getElementById("question-text").textContent = q.question;

  const choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";

  const existingAnswer = state.answers[idx];

  q.choices.forEach((choice, ci) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.type = "button";
    btn.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + ci)}</span><span class="choice-text">${choice}</span>`;
    btn.addEventListener("click", () => selectAnswer(ci));
    if (existingAnswer !== null) {
      applyAnswerStyle(btn, ci, q.correct, existingAnswer);
      btn.disabled = true;
    }
    choicesEl.appendChild(btn);
  });

  const explanationBox = document.getElementById("explanation-box");
  if (existingAnswer !== null) {
    showExplanation(q, existingAnswer);
  } else {
    explanationBox.classList.add("hidden");
  }

  document.getElementById("prev-btn").disabled = idx === 0;
  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent = idx === total - 1 ? "Finish reviewer" : "Next question";
  nextBtn.disabled = existingAnswer === null;
}

function applyAnswerStyle(btn, ci, correctIdx, chosenIdx) {
  if (ci === correctIdx) {
    btn.classList.add("correct");
  } else if (ci === chosenIdx) {
    btn.classList.add("incorrect");
  } else {
    btn.classList.add("dimmed");
  }
}

function selectAnswer(choiceIndex) {
  const idx = state.currentIndex;
  if (state.answers[idx] !== null) return;
  const q = state.order[idx];
  state.answers[idx] = choiceIndex;

  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach((btn, ci) => {
    applyAnswerStyle(btn, ci, q.correct, choiceIndex);
    btn.disabled = true;
  });

  showExplanation(q, choiceIndex);
  document.getElementById("next-btn").disabled = false;
}

function showExplanation(q, chosenIdx) {
  const box = document.getElementById("explanation-box");
  const isCorrect = chosenIdx === q.correct;
  box.classList.remove("hidden");
  box.classList.toggle("box-correct", isCorrect);
  box.classList.toggle("box-incorrect", !isCorrect);
  document.getElementById("explanation-verdict").textContent = isCorrect ? "Correct!" : "Not quite.";
  document.getElementById("explanation-verdict").className = "verdict " + (isCorrect ? "verdict-correct" : "verdict-incorrect");

  const correctAnswerLine = isCorrect
    ? ""
    : `<p class="correct-answer-line">Correct answer: <strong>${q.choices[q.correct]}</strong></p>`;

  document.getElementById("explanation-text").innerHTML = `${correctAnswerLine}<p>${q.explanation}</p>`;
}

function nextQuestion() {
  if (state.currentIndex < state.order.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderQuestion();
  }
}

function finishQuiz() {
  showScreen(resultsScreen);
  renderResults();
}

function renderResults() {
  const total = state.order.length;
  let correctCount = 0;
  const byTopic = {};

  state.order.forEach((q, i) => {
    const isCorrect = state.answers[i] === q.correct;
    if (isCorrect) correctCount++;
    if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
    byTopic[q.topic].total++;
    if (isCorrect) byTopic[q.topic].correct++;
  });

  const percent = Math.round((correctCount / total) * 100);
  document.getElementById("score-percent").textContent = `${percent}%`;
  document.getElementById("score-fraction").textContent = `${correctCount} out of ${total} correct`;

  let remark = "";
  if (percent >= 90) remark = "Outstanding! You know this material inside and out.";
  else if (percent >= 75) remark = "Great job! You have a solid grasp of the lessons.";
  else if (percent >= 60) remark = "Good effort. Review the topics below to strengthen weak spots.";
  else remark = "Keep practicing. Revisit the lessons and try again.";
  document.getElementById("score-remark").textContent = remark;

  const scoreCircle = document.getElementById("score-circle");
  scoreCircle.style.setProperty("--pct", percent);
  scoreCircle.classList.remove("ring-low", "ring-mid", "ring-high");
  scoreCircle.classList.add(percent >= 75 ? "ring-high" : percent >= 50 ? "ring-mid" : "ring-low");

  const topicBreakdown = document.getElementById("topic-breakdown");
  topicBreakdown.innerHTML = "";
  Object.entries(byTopic).forEach(([topic, stat]) => {
    const pct = Math.round((stat.correct / stat.total) * 100);
    const row = document.createElement("div");
    row.className = "topic-row";
    row.innerHTML = `
      <div class="topic-row-head">
        <span>${topic}</span>
        <span>${stat.correct}/${stat.total}</span>
      </div>
      <div class="topic-row-bar">
        <div class="topic-row-fill" style="width:${pct}%"></div>
      </div>
    `;
    topicBreakdown.appendChild(row);
  });

  renderReview();
}

function renderReview() {
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";
  state.order.forEach((q, i) => {
    const chosen = state.answers[i];
    const isCorrect = chosen === q.correct;
    const item = document.createElement("div");
    item.className = "review-item " + (isCorrect ? "review-correct" : "review-incorrect");
    item.innerHTML = `
      <div class="review-head">
        <span class="review-num">${i + 1}</span>
        <span class="review-topic">${q.topic}</span>
        <span class="review-result">${isCorrect ? "Correct" : "Incorrect"}</span>
      </div>
      <p class="review-question">${q.question}</p>
      <p class="review-your">Your answer: <strong>${q.choices[chosen]}</strong></p>
      ${!isCorrect ? `<p class="review-correct-ans">Correct answer: <strong>${q.choices[q.correct]}</strong></p>` : ""}
      <p class="review-explanation">${q.explanation}</p>
    `;
    reviewList.appendChild(item);
  });
}

function retakeQuiz() {
  showScreen(startScreen);
}

/* ============ INIT ============ */
document.addEventListener("DOMContentLoaded", () => {
  buildTopicCheckboxes();
  updateStartCount();

  document.getElementById("topic-list").addEventListener("change", updateStartCount);
  document.getElementById("select-all-btn").addEventListener("click", () => {
    document.querySelectorAll("#topic-list input[type=checkbox]").forEach(b => (b.checked = true));
    updateStartCount();
  });
  document.getElementById("select-none-btn").addEventListener("click", () => {
    document.querySelectorAll("#topic-list input[type=checkbox]").forEach(b => (b.checked = false));
    updateStartCount();
  });
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  document.getElementById("prev-btn").addEventListener("click", prevQuestion);
  document.getElementById("retake-btn").addEventListener("click", retakeQuiz);
  document.getElementById("review-toggle").addEventListener("click", () => {
    const list = document.getElementById("review-list");
    const btn = document.getElementById("review-toggle");
    const isHidden = list.classList.toggle("hidden");
    btn.textContent = isHidden ? "Show full answer review" : "Hide full answer review";
  });
});
