export const UI_CONSTANTS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_FORMATS: ['application/pdf'],
  KEYWORDS_DISPLAY_LIMIT: 8
};

export const validateFile = (file) => {
  if (!file) {
    throw new Error('File is required');
  }
  
  if (!UI_CONSTANTS.SUPPORTED_FORMATS.includes(file.type)) {
    throw new Error('Please upload valid PDF files');
  }
  
  if (file.size > UI_CONSTANTS.MAX_FILE_SIZE) {
    throw new Error('File size exceeds 10MB limit');
  }
  
  return true;
};

export const formatScore = (score) => {
  return Math.round(Math.min(Math.max(score, 0), 100));
};
