// Psychiatric terms array from the original implementation
export const PSYCH_TERMS = [
  'anxiety', 'depression', 'bipolar', 'schizo', 'trauma', 'ocd', 'adhd',
  'ptsd', 'panic', 'phobia', 'insomnia', 'mania', 'psychosis', 'disorder',
  'stress', 'compulsion', 'dissociation', 'paranoia', 'neurosis', 'dementia'
];

// Helper function to get a random psychiatric term
export const getRandomPsychTerm = () => {
  return PSYCH_TERMS[Math.floor(Math.random() * PSYCH_TERMS.length)];
};

// Helper function to construct image path
export const getImagePath = (imageId) => {
  return `/img/${imageId}.png`;
};

// Total number of images (based on the original implementation)
export const TOTAL_IMAGES = 1189;