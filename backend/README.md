Here's the complete updated setup instructions:

1. **Create virtual environment** (highly recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate          # Mac/Linux
   # or: venv\Scripts\activate      # Windows PowerShell
   ```

2. **Install all dependencies**
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

3. **Download the big & accurate SpaCy model** (this is mandatory for good keyword extraction)
   ```bash
   python -m spacy download en_core_web_lg
   ```

4. **Get your FREE Gemini API key (takes 15 seconds)**
   → Go here: https://aistudio.google.com/app/apikey  
   → Click "Create API key" → Copy it

5. **Put the keys in .env**
   ```bash
   echo "GEMINI_API_KEY=your_actual_key_here" > .env
   echo "FRONTEND_URL=your_frontend_url" >> .env
   ```
   (Replace `your_actual_key_here` with the key you just copied and `your_frontend_url` with your actual Next.js frontend URL.)


6. **Start the backend**
   ```bash
   uvicorn app.main:app --reload
   ```

   You should see something like:
   ```
   INFO:     Uvicorn running on http://127.0.0.1:8000
   INFO:     Application startup complete.
   ```