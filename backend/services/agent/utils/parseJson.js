/**
 * Safely parse JSON from LLM output, handling markdown code fences and extraneous text.
 * @param {string} content - Raw response string from LLM
 * @returns {object|array} Parsed JSON object or array
 */
export const parseJsonResponse = (content) => {
    if (typeof content !== "string") {
        return content;
    }

    let cleaned = content.trim();

    // Remove markdown code block markers if present
    if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    }

    // Try parsing cleaned content directly
    try {
        return JSON.parse(cleaned);
    } catch (e1) {
        // If direct parse fails, try extracting first '{' to last '}' or '[' to ']'
        const firstBrace = cleaned.indexOf("{");
        const lastBrace = cleaned.lastIndexOf("}");
        if (firstBrace !== -1 && lastBrace > firstBrace) {
            try {
                return JSON.parse(cleaned.substring(firstBrace, lastBrace + 1));
            } catch (e2) {
                // Ignore fallback error and rethrow original error
            }
        }

        const firstBracket = cleaned.indexOf("[");
        const lastBracket = cleaned.lastIndexOf("]");
        if (firstBracket !== -1 && lastBracket > firstBracket) {
            try {
                return JSON.parse(cleaned.substring(firstBracket, lastBracket + 1));
            } catch (e3) {
                // Ignore fallback error and rethrow original error
            }
        }

        throw new Error(`Failed to parse JSON response from LLM output: ${e1.message}`);
    }
};
