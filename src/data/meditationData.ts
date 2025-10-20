// Comprehensive meditation data with 1000+ items
export interface MeditationItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  icon: string;
  listeners: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  lottieAnimation?: string;
}

// Categories for meditation
export const meditationCategories = [
  'Quick Reset',
  'Mindful Parenting',
  'Deep Sleep Recovery',
  'Start Your Day Calm',
  'Parent–Child Bonding',
  'Emotional First Aid',
  'Affirmations & Mantras',
  'Stress Relief',
  'Anxiety Management',
  'Focus & Concentration',
  'Body Scan',
  'Loving Kindness',
  'Gratitude Practice',
  'Breathing Exercises',
  'Progressive Relaxation',
  'Mindful Walking',
  'Sleep Stories',
  'Nature Sounds',
  'Chakra Balancing',
  'Energy Healing',
  'Synced Just Now'
];

// Generate comprehensive meditation data
const generateMeditationData = (): MeditationItem[] => {
  const data: MeditationItem[] = [];
  let id = 1;

  // Quick Reset (50 items)
  const quickResetTitles = [
    '5-Minute Breath Focus', 'Instant Calm', 'Mindful Minute', 'Quick Reset', 'Emergency Calm',
    'Rapid Relaxation', 'Instant Peace', 'Quick Mindfulness', 'Fast Focus', 'Rapid Recovery',
    'Quick Centering', 'Instant Balance', 'Rapid Calm', 'Quick Grounding', 'Fast Serenity',
    'Instant Tranquility', 'Quick Harmony', 'Rapid Peace', 'Fast Mindfulness', 'Quick Zen',
    'Instant Stillness', 'Quick Clarity', 'Rapid Focus', 'Fast Calm', 'Quick Balance',
    'Instant Relief', 'Quick Serenity', 'Rapid Zen', 'Fast Peace', 'Quick Tranquility',
    'Instant Harmony', 'Quick Mindfulness', 'Rapid Stillness', 'Fast Clarity', 'Quick Focus',
    'Instant Calm', 'Quick Zen', 'Rapid Serenity', 'Fast Balance', 'Quick Peace',
    'Instant Tranquility', 'Quick Stillness', 'Rapid Harmony', 'Fast Clarity', 'Quick Focus',
    'Instant Serenity', 'Quick Balance', 'Rapid Peace', 'Fast Zen', 'Quick Mindfulness'
  ];

  quickResetTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A quick ${Math.floor(Math.random() * 5) + 1}-minute meditation to reset your mind and find instant calm.`,
      duration: `${Math.floor(Math.random() * 5) + 1} Min`,
      category: 'Quick Reset',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '🧠',
      listeners: `${Math.floor(Math.random() * 50000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['quick', 'reset', 'calm', 'breathing'],
      lottieAnimation: 'breathing-circle'
    });
  });

  // Mindful Parenting (50 items)
  const parentingTitles = [
    'Patience Practice', 'Emotional Regulation', 'Present Moment Parenting', 'Calm Parent', 'Mindful Discipline',
    'Parenting with Love', 'Gentle Guidance', 'Mindful Boundaries', 'Compassionate Parenting', 'Peaceful Home',
    'Parenting Presence', 'Mindful Listening', 'Calm Communication', 'Gentle Authority', 'Loving Limits',
    'Mindful Patience', 'Parenting Zen', 'Calm Guidance', 'Gentle Teaching', 'Peaceful Parenting',
    'Mindful Connection', 'Calm Response', 'Gentle Discipline', 'Parenting Peace', 'Mindful Authority',
    'Calm Teaching', 'Gentle Guidance', 'Peaceful Limits', 'Mindful Boundaries', 'Calm Parenting',
    'Gentle Authority', 'Mindful Discipline', 'Peaceful Guidance', 'Calm Teaching', 'Gentle Limits',
    'Parenting Zen', 'Mindful Patience', 'Calm Connection', 'Gentle Response', 'Peaceful Authority',
    'Mindful Guidance', 'Calm Discipline', 'Gentle Teaching', 'Peaceful Patience', 'Parenting Calm',
    'Mindful Authority', 'Gentle Zen', 'Calm Boundaries', 'Peaceful Teaching', 'Mindful Guidance'
  ];

  parentingTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 15) + 5}-minute meditation to help parents find calm and patience.`,
      duration: `${Math.floor(Math.random() * 15) + 5} Min`,
      category: 'Mindful Parenting',
      image: `/lovable-uploads/601731bf-474a-425f-a8e9-132cd7ffa027.png`,
      icon: '💞',
      listeners: `${Math.floor(Math.random() * 40000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['parenting', 'patience', 'calm', 'family'],
      lottieAnimation: 'heart-beat'
    });
  });

  // Deep Sleep Recovery (50 items)
  const sleepTitles = [
    'Bedtime Wind-Down', 'Racing Thoughts Relief', 'Night Waking Rescue', 'Deep Sleep', 'Sleep Recovery',
    'Insomnia Relief', 'Sleep Preparation', 'Night Calm', 'Sleep Meditation', 'Bedtime Peace',
    'Sleep Stories', 'Night Serenity', 'Sleep Recovery', 'Bedtime Zen', 'Night Peace',
    'Sleep Preparation', 'Insomnia Help', 'Night Calm', 'Sleep Stories', 'Bedtime Meditation',
    'Sleep Recovery', 'Night Peace', 'Bedtime Stories', 'Sleep Preparation', 'Night Calm',
    'Sleep Stories', 'Bedtime Zen', 'Night Serenity', 'Sleep Recovery', 'Bedtime Peace',
    'Night Stories', 'Sleep Preparation', 'Bedtime Calm', 'Night Recovery', 'Sleep Stories',
    'Bedtime Peace', 'Night Meditation', 'Sleep Preparation', 'Bedtime Stories', 'Night Calm',
    'Sleep Recovery', 'Bedtime Zen', 'Night Peace', 'Sleep Stories', 'Bedtime Meditation',
    'Night Recovery', 'Sleep Preparation', 'Bedtime Stories', 'Night Calm', 'Sleep Peace'
  ];

  sleepTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 20) + 10}-minute meditation to help you fall asleep and stay asleep.`,
      duration: `${Math.floor(Math.random() * 20) + 10} Min`,
      category: 'Deep Sleep Recovery',
      image: `/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png`,
      icon: '🌙',
      listeners: `${Math.floor(Math.random() * 50000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['sleep', 'bedtime', 'recovery', 'calm'],
      lottieAnimation: 'moon-stars'
    });
  });

  // Start Your Day Calm (50 items)
  const morningTitles = [
    'Morning Affirmations', 'Grounding Practice', 'Intention Setting', 'Morning Calm', 'Day Start',
    'Morning Zen', 'Daily Intention', 'Morning Peace', 'Day Preparation', 'Morning Mindfulness',
    'Daily Grounding', 'Morning Serenity', 'Day Intention', 'Morning Calm', 'Daily Peace',
    'Morning Zen', 'Day Preparation', 'Morning Grounding', 'Daily Intention', 'Morning Peace',
    'Day Start', 'Morning Mindfulness', 'Daily Calm', 'Morning Serenity', 'Day Intention',
    'Morning Peace', 'Daily Grounding', 'Morning Zen', 'Day Preparation', 'Morning Calm',
    'Daily Intention', 'Morning Serenity', 'Day Start', 'Morning Peace', 'Daily Grounding',
    'Morning Zen', 'Day Intention', 'Morning Calm', 'Daily Peace', 'Morning Serenity',
    'Day Preparation', 'Morning Grounding', 'Daily Intention', 'Morning Peace', 'Day Start',
    'Morning Zen', 'Daily Calm', 'Morning Serenity', 'Day Intention', 'Morning Peace'
  ];

  morningTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 12) + 5}-minute morning meditation to start your day with calm and intention.`,
      duration: `${Math.floor(Math.random() * 12) + 5} Min`,
      category: 'Start Your Day Calm',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '☀️',
      listeners: `${Math.floor(Math.random() * 40000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['morning', 'intention', 'grounding', 'calm'],
      lottieAnimation: 'sunrise'
    });
  });

  // Parent–Child Bonding (50 items)
  const bondingTitles = [
    'Shared Breathing', 'Mindful Listening', 'Bedtime Connection', 'Parent-Child Bond', 'Family Meditation',
    'Together Time', 'Mindful Connection', 'Family Peace', 'Shared Calm', 'Bonding Meditation',
    'Family Zen', 'Shared Mindfulness', 'Together Calm', 'Family Connection', 'Shared Peace',
    'Family Meditation', 'Together Zen', 'Shared Calm', 'Family Peace', 'Bonding Time',
    'Shared Mindfulness', 'Family Connection', 'Together Peace', 'Shared Zen', 'Family Calm',
    'Bonding Meditation', 'Together Mindfulness', 'Family Zen', 'Shared Peace', 'Family Connection',
    'Together Calm', 'Shared Zen', 'Family Peace', 'Bonding Time', 'Shared Mindfulness',
    'Family Connection', 'Together Peace', 'Shared Calm', 'Family Zen', 'Bonding Meditation',
    'Together Mindfulness', 'Family Peace', 'Shared Zen', 'Family Connection', 'Together Calm',
    'Bonding Time', 'Shared Peace', 'Family Zen', 'Together Mindfulness', 'Family Connection'
  ];

  bondingTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 10) + 5}-minute meditation to strengthen the bond between parent and child.`,
      duration: `${Math.floor(Math.random() * 10) + 5} Min`,
      category: 'Parent–Child Bonding',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '🧸',
      listeners: `${Math.floor(Math.random() * 30000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['bonding', 'family', 'connection', 'together'],
      lottieAnimation: 'family-heart'
    });
  });

  // Emotional First Aid (50 items)
  const emotionalTitles = [
    'Anxiety Relief', 'Mom Guilt Antidote', 'Frustration Release', 'Emotional Healing', 'Stress Relief',
    'Anger Management', 'Emotional Regulation', 'Calm Response', 'Emotional Recovery', 'Stress Management',
    'Anxiety Help', 'Emotional Support', 'Calm Mind', 'Stress Relief', 'Emotional Healing',
    'Anxiety Relief', 'Stress Management', 'Emotional Recovery', 'Calm Response', 'Emotional Support',
    'Stress Relief', 'Anxiety Help', 'Emotional Healing', 'Calm Mind', 'Emotional Recovery',
    'Stress Management', 'Anxiety Relief', 'Emotional Support', 'Calm Response', 'Emotional Healing',
    'Stress Relief', 'Anxiety Help', 'Emotional Recovery', 'Calm Mind', 'Emotional Support',
    'Stress Management', 'Anxiety Relief', 'Emotional Healing', 'Calm Response', 'Emotional Recovery',
    'Stress Relief', 'Anxiety Help', 'Emotional Support', 'Calm Mind', 'Emotional Healing',
    'Stress Management', 'Anxiety Relief', 'Emotional Recovery', 'Calm Response', 'Emotional Support'
  ];

  emotionalTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 15) + 5}-minute meditation for emotional healing and stress relief.`,
      duration: `${Math.floor(Math.random() * 15) + 5} Min`,
      category: 'Emotional First Aid',
      image: `/lovable-uploads/601731bf-474a-425f-a8e9-132cd7ffa027.png`,
      icon: '🛠',
      listeners: `${Math.floor(Math.random() * 40000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['emotional', 'healing', 'stress', 'anxiety'],
      lottieAnimation: 'healing-hands'
    });
  });

  // Affirmations & Mantras (50 items)
  const affirmationTitles = [
    'Self-Worth Affirmations', 'Calming Mantras', 'Confidence Boosters', 'Positive Affirmations', 'Mantra Practice',
    'Self-Love', 'Positive Thinking', 'Confidence Building', 'Self-Acceptance', 'Positive Energy',
    'Self-Worth', 'Calming Words', 'Confidence Boost', 'Positive Mindset', 'Self-Love Practice',
    'Mantra Meditation', 'Positive Affirmations', 'Self-Acceptance', 'Confidence Building', 'Self-Worth Practice',
    'Calming Mantras', 'Positive Energy', 'Self-Love', 'Confidence Boost', 'Positive Thinking',
    'Self-Acceptance', 'Mantra Practice', 'Positive Affirmations', 'Self-Worth', 'Calming Words',
    'Confidence Building', 'Positive Mindset', 'Self-Love Practice', 'Mantra Meditation', 'Positive Energy',
    'Self-Acceptance', 'Confidence Boost', 'Positive Thinking', 'Self-Worth Practice', 'Calming Mantras',
    'Positive Affirmations', 'Self-Love', 'Confidence Building', 'Positive Mindset', 'Self-Acceptance',
    'Mantra Practice', 'Positive Energy', 'Self-Worth', 'Calming Words', 'Confidence Boost'
  ];

  affirmationTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 15) + 5}-minute meditation with positive affirmations and mantras.`,
      duration: `${Math.floor(Math.random() * 15) + 5} Min`,
      category: 'Affirmations & Mantras',
      image: `/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png`,
      icon: '🌺',
      listeners: `${Math.floor(Math.random() * 40000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['affirmations', 'mantras', 'positive', 'self-love'],
      lottieAnimation: 'flower-bloom'
    });
  });

  // Stress Relief (50 items)
  const stressTitles = [
    'Work Stress Relief', 'Daily Stress Management', 'Stress Reduction', 'Calm Workplace', 'Stress Relief',
    'Work Calm', 'Daily Stress', 'Stress Management', 'Workplace Peace', 'Stress Reduction',
    'Daily Calm', 'Work Stress', 'Stress Relief', 'Workplace Calm', 'Daily Stress Management',
    'Stress Reduction', 'Work Peace', 'Daily Stress Relief', 'Workplace Stress', 'Stress Management',
    'Daily Calm', 'Work Stress Relief', 'Stress Reduction', 'Workplace Peace', 'Daily Stress',
    'Stress Management', 'Work Calm', 'Daily Stress Relief', 'Workplace Stress', 'Stress Reduction',
    'Daily Peace', 'Work Stress Management', 'Stress Relief', 'Workplace Calm', 'Daily Stress',
    'Stress Management', 'Work Peace', 'Daily Stress Relief', 'Workplace Stress', 'Stress Reduction',
    'Daily Calm', 'Work Stress Relief', 'Stress Management', 'Workplace Peace', 'Daily Stress',
    'Stress Reduction', 'Work Calm', 'Daily Stress Relief', 'Workplace Stress', 'Stress Management'
  ];

  stressTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 20) + 5}-minute meditation to relieve work and daily stress.`,
      duration: `${Math.floor(Math.random() * 20) + 5} Min`,
      category: 'Stress Relief',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '🧘',
      listeners: `${Math.floor(Math.random() * 50000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['stress', 'work', 'relief', 'calm'],
      lottieAnimation: 'stress-relief'
    });
  });

  // Anxiety Management (50 items)
  const anxietyTitles = [
    'Anxiety Relief', 'Panic Attack Help', 'Anxiety Management', 'Calm Anxiety', 'Anxiety Support',
    'Panic Relief', 'Anxiety Help', 'Calm Mind', 'Anxiety Management', 'Panic Support',
    'Anxiety Relief', 'Calm Anxiety', 'Panic Help', 'Anxiety Support', 'Calm Mind',
    'Anxiety Management', 'Panic Relief', 'Anxiety Help', 'Calm Anxiety', 'Panic Support',
    'Anxiety Relief', 'Calm Mind', 'Anxiety Management', 'Panic Help', 'Anxiety Support',
    'Calm Anxiety', 'Panic Relief', 'Anxiety Help', 'Calm Mind', 'Anxiety Management',
    'Panic Support', 'Anxiety Relief', 'Calm Anxiety', 'Panic Help', 'Anxiety Support',
    'Calm Mind', 'Anxiety Management', 'Panic Relief', 'Anxiety Help', 'Calm Anxiety',
    'Panic Support', 'Anxiety Relief', 'Calm Mind', 'Anxiety Management', 'Panic Help',
    'Anxiety Support', 'Calm Anxiety', 'Panic Relief', 'Anxiety Help', 'Calm Mind'
  ];

  anxietyTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 20) + 5}-minute meditation specifically designed to help with anxiety and panic.`,
      duration: `${Math.floor(Math.random() * 20) + 5} Min`,
      category: 'Anxiety Management',
      image: `/lovable-uploads/601731bf-474a-425f-a8e9-132cd7ffa027.png`,
      icon: '🕊️',
      listeners: `${Math.floor(Math.random() * 45000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['anxiety', 'panic', 'calm', 'support'],
      lottieAnimation: 'peace-dove'
    });
  });

  // Focus & Concentration (50 items)
  const focusTitles = [
    'Focus Meditation', 'Concentration Practice', 'Mind Focus', 'Attention Training', 'Focus Building',
    'Concentration Help', 'Mind Training', 'Focus Practice', 'Attention Building', 'Concentration Training',
    'Focus Meditation', 'Mind Focus', 'Concentration Practice', 'Attention Training', 'Focus Building',
    'Mind Training', 'Concentration Help', 'Focus Practice', 'Attention Building', 'Concentration Training',
    'Focus Meditation', 'Mind Focus', 'Concentration Practice', 'Attention Training', 'Focus Building',
    'Mind Training', 'Concentration Help', 'Focus Practice', 'Attention Building', 'Concentration Training',
    'Focus Meditation', 'Mind Focus', 'Concentration Practice', 'Attention Training', 'Focus Building',
    'Mind Training', 'Concentration Help', 'Focus Practice', 'Attention Building', 'Concentration Training',
    'Focus Meditation', 'Mind Focus', 'Concentration Practice', 'Attention Training', 'Focus Building',
    'Mind Training', 'Concentration Help', 'Focus Practice', 'Attention Building', 'Concentration Training'
  ];

  focusTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 15) + 5}-minute meditation to improve focus and concentration.`,
      duration: `${Math.floor(Math.random() * 15) + 5} Min`,
      category: 'Focus & Concentration',
      image: `/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png`,
      icon: '🎯',
      listeners: `${Math.floor(Math.random() * 35000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['focus', 'concentration', 'attention', 'mind'],
      lottieAnimation: 'focus-target'
    });
  });

  // Body Scan (50 items)
  const bodyScanTitles = [
    'Full Body Scan', 'Progressive Relaxation', 'Body Awareness', 'Muscle Relaxation', 'Body Scan',
    'Progressive Body Scan', 'Muscle Release', 'Body Relaxation', 'Full Body Awareness', 'Progressive Relaxation',
    'Body Scan Practice', 'Muscle Relaxation', 'Body Awareness', 'Progressive Body Scan', 'Full Body Relaxation',
    'Muscle Release', 'Body Scan', 'Progressive Relaxation', 'Body Awareness', 'Full Body Scan',
    'Muscle Relaxation', 'Progressive Body Scan', 'Body Awareness', 'Full Body Relaxation', 'Muscle Release',
    'Body Scan Practice', 'Progressive Relaxation', 'Body Awareness', 'Full Body Scan', 'Muscle Relaxation',
    'Progressive Body Scan', 'Body Relaxation', 'Muscle Release', 'Body Scan', 'Progressive Relaxation',
    'Full Body Awareness', 'Muscle Relaxation', 'Body Scan Practice', 'Progressive Body Scan', 'Body Awareness',
    'Full Body Relaxation', 'Muscle Release', 'Body Scan', 'Progressive Relaxation', 'Body Awareness',
    'Full Body Scan', 'Muscle Relaxation', 'Progressive Body Scan', 'Body Relaxation', 'Muscle Release'
  ];

  bodyScanTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 25) + 10}-minute body scan meditation for deep relaxation.`,
      duration: `${Math.floor(Math.random() * 25) + 10} Min`,
      category: 'Body Scan',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '🧘‍♀️',
      listeners: `${Math.floor(Math.random() * 40000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['body-scan', 'relaxation', 'muscle', 'awareness'],
      lottieAnimation: 'body-scan'
    });
  });

  // Loving Kindness (50 items)
  const lovingKindnessTitles = [
    'Loving Kindness', 'Metta Meditation', 'Compassion Practice', 'Loving Kindness', 'Metta Practice',
    'Compassion Meditation', 'Loving Kindness Practice', 'Metta Meditation', 'Compassion Practice', 'Loving Kindness',
    'Metta Practice', 'Compassion Meditation', 'Loving Kindness Practice', 'Metta Meditation', 'Compassion Practice',
    'Loving Kindness', 'Metta Practice', 'Compassion Meditation', 'Loving Kindness Practice', 'Metta Meditation',
    'Compassion Practice', 'Loving Kindness', 'Metta Practice', 'Compassion Meditation', 'Loving Kindness Practice',
    'Metta Meditation', 'Compassion Practice', 'Loving Kindness', 'Metta Practice', 'Compassion Meditation',
    'Loving Kindness Practice', 'Metta Meditation', 'Compassion Practice', 'Loving Kindness', 'Metta Practice',
    'Compassion Meditation', 'Loving Kindness Practice', 'Metta Meditation', 'Compassion Practice', 'Loving Kindness',
    'Metta Practice', 'Compassion Meditation', 'Loving Kindness Practice', 'Metta Meditation', 'Compassion Practice',
    'Loving Kindness', 'Metta Practice', 'Compassion Meditation', 'Loving Kindness Practice', 'Metta Meditation'
  ];

  lovingKindnessTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 20) + 10}-minute loving kindness meditation to cultivate compassion.`,
      duration: `${Math.floor(Math.random() * 20) + 10} Min`,
      category: 'Loving Kindness',
      image: `/lovable-uploads/601731bf-474a-425f-a8e9-132cd7ffa027.png`,
      icon: '💝',
      listeners: `${Math.floor(Math.random() * 35000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['loving-kindness', 'compassion', 'metta', 'love'],
      lottieAnimation: 'loving-heart'
    });
  });

  // Gratitude Practice (50 items)
  const gratitudeTitles = [
    'Gratitude Practice', 'Thankful Meditation', 'Gratitude Journal', 'Thankful Practice', 'Gratitude Meditation',
    'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice', 'Gratitude Journal', 'Thankful Meditation',
    'Gratitude Practice', 'Thankful Practice', 'Gratitude Meditation', 'Thankful Meditation', 'Gratitude Practice',
    'Thankful Practice', 'Gratitude Journal', 'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice',
    'Gratitude Meditation', 'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice', 'Gratitude Journal',
    'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice', 'Gratitude Meditation', 'Thankful Meditation',
    'Gratitude Practice', 'Thankful Practice', 'Gratitude Journal', 'Thankful Meditation', 'Gratitude Practice',
    'Thankful Practice', 'Gratitude Meditation', 'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice',
    'Gratitude Journal', 'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice', 'Gratitude Meditation',
    'Thankful Meditation', 'Gratitude Practice', 'Thankful Practice', 'Gratitude Journal', 'Thankful Meditation'
  ];

  gratitudeTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 15) + 5}-minute gratitude meditation to cultivate thankfulness.`,
      duration: `${Math.floor(Math.random() * 15) + 5} Min`,
      category: 'Gratitude Practice',
      image: `/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png`,
      icon: '🙏',
      listeners: `${Math.floor(Math.random() * 30000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['gratitude', 'thankful', 'appreciation', 'blessings'],
      lottieAnimation: 'gratitude-hands'
    });
  });

  // Breathing Exercises (50 items)
  const breathingTitles = [
    'Deep Breathing', 'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation',
    'Breathing Exercise', 'Breath Work', 'Breathing Practice', 'Deep Breathing', 'Breath Meditation'
  ];

  breathingTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 10) + 3}-minute breathing exercise for relaxation and focus.`,
      duration: `${Math.floor(Math.random() * 10) + 3} Min`,
      category: 'Breathing Exercises',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '🫁',
      listeners: `${Math.floor(Math.random() * 40000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['breathing', 'breath-work', 'relaxation', 'focus'],
      lottieAnimation: 'breathing-circle'
    });
  });

  // Progressive Relaxation (50 items)
  const progressiveTitles = [
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release',
    'Progressive Relaxation', 'Muscle Relaxation', 'Progressive Muscle Relaxation', 'Relaxation Practice', 'Muscle Release'
  ];

  progressiveTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 20) + 10}-minute progressive relaxation for deep muscle release.`,
      duration: `${Math.floor(Math.random() * 20) + 10} Min`,
      category: 'Progressive Relaxation',
      image: `/lovable-uploads/601731bf-474a-425f-a8e9-132cd7ffa027.png`,
      icon: '🛌',
      listeners: `${Math.floor(Math.random() * 35000) + 10000} Listening`,
      difficulty: 'Intermediate',
      tags: ['progressive', 'relaxation', 'muscle', 'release'],
      lottieAnimation: 'muscle-relaxation'
    });
  });

  // Mindful Walking (50 items)
  const walkingTitles = [
    'Mindful Walking', 'Walking Meditation', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement',
    'Walking Meditation', 'Mindful Walking', 'Mindful Steps', 'Walking Practice', 'Mindful Movement'
  ];

  walkingTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 15) + 5}-minute mindful walking meditation for movement and awareness.`,
      duration: `${Math.floor(Math.random() * 15) + 5} Min`,
      category: 'Mindful Walking',
      image: `/lovable-uploads/4954d683-5247-4b61-889b-1baaa2eb1a0d.png`,
      icon: '🚶‍♀️',
      listeners: `${Math.floor(Math.random() * 25000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['walking', 'mindful', 'movement', 'awareness'],
      lottieAnimation: 'walking-person'
    });
  });

  // Sleep Stories (50 items)
  const sleepStoryTitles = [
    'The Whispering Forest', 'Starlit Dreams', 'Painting Forest', 'The Gentle Night', 'Forest Dreams',
    'Night Stories', 'Sleep Tales', 'Bedtime Stories', 'Dream Stories', 'Sleep Tales',
    'Night Dreams', 'Bedtime Tales', 'Sleep Stories', 'Dream Tales', 'Night Stories',
    'Bedtime Dreams', 'Sleep Tales', 'Dream Stories', 'Night Tales', 'Sleep Dreams',
    'Bedtime Stories', 'Night Dreams', 'Sleep Tales', 'Dream Stories', 'Bedtime Tales',
    'Night Stories', 'Sleep Dreams', 'Dream Tales', 'Bedtime Stories', 'Night Dreams',
    'Sleep Tales', 'Dream Stories', 'Bedtime Dreams', 'Night Tales', 'Sleep Dreams',
    'Bedtime Stories', 'Night Dreams', 'Sleep Tales', 'Dream Stories', 'Bedtime Tales',
    'Night Stories', 'Sleep Dreams', 'Dream Tales', 'Bedtime Stories', 'Night Dreams',
    'Sleep Tales', 'Dream Stories', 'Bedtime Dreams', 'Night Tales', 'Sleep Dreams'
  ];

  sleepStoryTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 20) + 10}-minute sleep story to help you drift off peacefully.`,
      duration: `${Math.floor(Math.random() * 20) + 10} Min`,
      category: 'Sleep Stories',
      image: `/lovable-uploads/97bc74f2-226d-4977-aa93-9b0d386fca75.png`,
      icon: '🌙',
      listeners: `${Math.floor(Math.random() * 50000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['sleep', 'stories', 'bedtime', 'dreams'],
      lottieAnimation: 'sleeping-moon'
    });
  });

  // Nature Sounds (50 items)
  const natureTitles = [
    'Ocean Waves', 'Forest Sounds', 'Rain Sounds', 'Thunderstorm', 'Birds Singing',
    'Nature Sounds', 'Ocean Waves', 'Forest Sounds', 'Rain Sounds', 'Thunderstorm',
    'Birds Singing', 'Nature Sounds', 'Ocean Waves', 'Forest Sounds', 'Rain Sounds',
    'Thunderstorm', 'Birds Singing', 'Nature Sounds', 'Ocean Waves', 'Forest Sounds',
    'Rain Sounds', 'Thunderstorm', 'Birds Singing', 'Nature Sounds', 'Ocean Waves',
    'Forest Sounds', 'Rain Sounds', 'Thunderstorm', 'Birds Singing', 'Nature Sounds',
    'Ocean Waves', 'Forest Sounds', 'Rain Sounds', 'Thunderstorm', 'Birds Singing',
    'Nature Sounds', 'Ocean Waves', 'Forest Sounds', 'Rain Sounds', 'Thunderstorm',
    'Birds Singing', 'Nature Sounds', 'Ocean Waves', 'Forest Sounds', 'Rain Sounds',
    'Thunderstorm', 'Birds Singing', 'Nature Sounds', 'Ocean Waves', 'Forest Sounds'
  ];

  natureTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 30) + 10}-minute nature sound meditation for relaxation.`,
      duration: `${Math.floor(Math.random() * 30) + 10} Min`,
      category: 'Nature Sounds',
      image: `/lovable-uploads/f3796138-3de0-44f8-9fab-6a71b48c7632.png`,
      icon: '🌿',
      listeners: `${Math.floor(Math.random() * 60000) + 10000} Listening`,
      difficulty: 'Beginner',
      tags: ['nature', 'sounds', 'relaxation', 'ambient'],
      lottieAnimation: 'nature-leaves'
    });
  });

  // Chakra Balancing (50 items)
  const chakraTitles = [
    'Root Chakra', 'Sacral Chakra', 'Solar Plexus', 'Heart Chakra', 'Throat Chakra',
    'Third Eye Chakra', 'Crown Chakra', 'Chakra Balance', 'Energy Healing', 'Chakra Meditation',
    'Root Chakra', 'Sacral Chakra', 'Solar Plexus', 'Heart Chakra', 'Throat Chakra',
    'Third Eye Chakra', 'Crown Chakra', 'Chakra Balance', 'Energy Healing', 'Chakra Meditation',
    'Root Chakra', 'Sacral Chakra', 'Solar Plexus', 'Heart Chakra', 'Throat Chakra',
    'Third Eye Chakra', 'Crown Chakra', 'Chakra Balance', 'Energy Healing', 'Chakra Meditation',
    'Root Chakra', 'Sacral Chakra', 'Solar Plexus', 'Heart Chakra', 'Throat Chakra',
    'Third Eye Chakra', 'Crown Chakra', 'Chakra Balance', 'Energy Healing', 'Chakra Meditation',
    'Root Chakra', 'Sacral Chakra', 'Solar Plexus', 'Heart Chakra', 'Throat Chakra',
    'Third Eye Chakra', 'Crown Chakra', 'Chakra Balance', 'Energy Healing', 'Chakra Meditation'
  ];

  chakraTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 25) + 10}-minute chakra balancing meditation for energy healing.`,
      duration: `${Math.floor(Math.random() * 25) + 10} Min`,
      category: 'Chakra Balancing',
      image: `/lovable-uploads/0f00c731-51b5-47e8-8604-6a9fbde4fe91.png`,
      icon: '🔮',
      listeners: `${Math.floor(Math.random() * 30000) + 10000} Listening`,
      difficulty: 'Advanced',
      tags: ['chakra', 'energy', 'healing', 'balance'],
      lottieAnimation: 'chakra-wheel'
    });
  });

  // Energy Healing (50 items)
  const energyTitles = [
    'Energy Healing', 'Reiki Meditation', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Practice', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Meditation', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Practice', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Meditation', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Practice', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Meditation', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Practice', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Meditation', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow',
    'Reiki Practice', 'Energy Healing', 'Energy Balance', 'Healing Energy', 'Energy Flow'
  ];

  energyTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `A ${Math.floor(Math.random() * 30) + 15}-minute energy healing meditation for spiritual wellness.`,
      duration: `${Math.floor(Math.random() * 30) + 15} Min`,
      category: 'Energy Healing',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: '✨',
      listeners: `${Math.floor(Math.random() * 25000) + 10000} Listening`,
      difficulty: 'Advanced',
      tags: ['energy', 'healing', 'reiki', 'spiritual'],
      lottieAnimation: 'energy-flow'
    });
  });

  // ... existing code ...
  // Synced Just Now (50 items)
  const syncedTodayTitles = [
    'Morning Clarity', 'Digital Detox', 'Deep Focus Reset', 'Calm & Ready', 'Gentle Awakening',
    'Breath & Balance', 'Present Moment', 'Mindful Momentum', 'Quiet Power', 'Grounded Today',
    'Fresh Start Calm', 'Soft Energy', 'Centered Now', 'Steady Breath', 'Quiet Confidence',
    'Ease Into Day', 'Reset & Refocus', 'Serene Pace', 'Calm Mindset', 'Warm Sunrise',
    'Cool Night Calm', 'Daylight Zen', 'Still Waters', 'Silent Strength', 'Open Heart',
    'Kind Attention', 'Grateful Morning', 'Clear Intentions', 'Humble Joy', 'Light Within',
    'Soft Focus', 'Crisp Mind', 'Gentle Rhythm', 'Balanced Energy', 'Steady Presence',
    'Calm Compass', 'Anchor & Breathe', 'Subtle Glow', 'Quiet Harmony', 'Ease & Flow',
    'Soft Reset', 'Peace Pulse', 'Bright Intention', 'Easeful Breath', 'Simple Stillness',
    'Tranquil Start', 'Fresh Energy', 'Daily Centering', 'Present & Calm', 'Gentle Sync'
  ];

  syncedTodayTitles.forEach((title, index) => {
    data.push({
      id: id++,
      title,
      description: `Fresh ${Math.floor(Math.random() * 20) + 10}-minute session synced just now.`,
      duration: `${Math.floor(Math.random() * 20) + 10} Min`,
      category: 'Synced Just Now',
      image: `/lovable-uploads/83b8c257-0ff1-41ee-a3df-f31bfbccb6a3.png`,
      icon: index % 3 === 0 ? '⚡' : index % 3 === 1 ? '🕊️' : '🌿',
      listeners: `${Math.floor(Math.random() * 60000) + 10000} Listening`,
      difficulty: (['Beginner','Intermediate','Advanced'][index % 3] as MeditationItem['difficulty']),
      tags: ['fresh', 'today', 'sync', 'calm'],
      lottieAnimation: index % 4 === 0 ? 'sunrise' : index % 4 === 1 ? 'moon-stars' : index % 4 === 2 ? 'breathing-circle' : 'energy-flow'
    });
  });

  return data;
};

export const meditationData = generateMeditationData();

// Helper function to get meditations by category
export const getMeditationsByCategory = (category: string): MeditationItem[] => {
  return meditationData.filter(meditation => meditation.category === category);
};

// Helper function to get random meditations
export const getRandomMeditations = (count: number): MeditationItem[] => {
  const shuffled = [...meditationData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to search meditations
export const searchMeditations = (query: string): MeditationItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return meditationData.filter(meditation => 
    meditation.title.toLowerCase().includes(lowercaseQuery) ||
    meditation.description.toLowerCase().includes(lowercaseQuery) ||
    meditation.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

