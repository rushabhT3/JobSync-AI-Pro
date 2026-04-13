import pdfplumber
import PyPDF2
import io
import logging
from ..interfaces import ITextExtractor

logger = logging.getLogger(__name__)

class PDFTextExtractor(ITextExtractor):
    async def extract_text(self, file_bytes: bytes) -> str:
        text = ""
        try:
            with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
                for page in pdf.pages:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text + "\n"
        except Exception as e:
            logger.warning(f"PDF plumber failed: {e}")
            try:
                reader = PyPDF2.PdfReader(io.BytesIO(file_bytes))
                for page in reader.pages:
                    text += page.extract_text() or ""
            except Exception as e2:
                logger.error(f"Both PDF extraction methods failed: {e2}")
                return ""
        
        return text.strip()
