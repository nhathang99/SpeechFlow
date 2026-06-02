"use client";

import { useState } from "react";
import { Bold, Italic, Type, Volume2, Play } from "lucide-react";
import styles from "./VoiceEditor.module.scss";

export default function VoiceEditor() {
  const [text, setText] = useState("");
  const maxLength = 5000;

  return (
    <div className={styles.wrapper}>
      <div className={styles.editorContainer}>
        <div className={styles.toolbar}>
          <div className={styles.formatGroup}>
            <button className={styles.toolBtn} title="Bold">
              <Bold size={16} strokeWidth={2.5} />
            </button>
            <button className={styles.toolBtn} title="Italic">
              <Italic size={16} strokeWidth={2.5} />
            </button>
            <button className={styles.toolBtn} title="Text Style">
              <Type size={16} strokeWidth={2.5} />
            </button>
          </div>

          <div className={styles.statusGroup}>
            <span className={styles.dot}></span>
            <span>Auto-saving...</span>
          </div>
        </div>

        <div className={styles.contentArea}>
          <textarea
            placeholder="Start typing or paste text here..."
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, maxLength))}
          />

          <div className={styles.editorFooter}>
            <button className={styles.voiceSelector}>
              <div className={styles.speakerIcon}>
                <Volume2 size={16} strokeWidth={2.25} />
              </div>
              <span className={styles.voiceName}>British Male (Premium)</span>
              <span className={styles.chevron}>▼</span>
            </button>

            <span className={styles.charCount}>
              {text.length.toLocaleString()} / {maxLength.toLocaleString()}{" "}
              characters
            </span>
          </div>
        </div>
      </div>

      <div className={styles.actionRow}>
        <button className={styles.generateBtn}>
          <div className={styles.playIcon}>
            <Play size={14} fill="#fff" stroke="none" />
          </div>
          <span>Generate Voiceover</span>
        </button>
      </div>
    </div>
  );
}
