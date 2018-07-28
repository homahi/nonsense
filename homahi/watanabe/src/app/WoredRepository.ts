import { Word } from './word/word';

export class WoredRepository {

    words: Word[];
    constructor() {
        const urlList = [
            'https://glyphwiki.org/glyph/u908a-ue0104@14.svg',
            'https://glyphwiki.org/glyph/u908a-g.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-001@7.svg', 'https://glyphwiki.org/glyph/u908a-itaiji-003@6.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-007.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-008@6.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-010@7.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-011.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-012@7.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-013@10.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-014@6.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-015@4.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-016@7.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-017.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-018.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-020.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-021.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-022.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-023.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-024.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-025.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-026.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-027.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-028.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-029.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-030.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-031.svg',
            'https://glyphwiki.org/glyph/u908a-itaiji-032.svg',
            'https://glyphwiki.org/glyph/u908a-ue0101.svg',
            'https://glyphwiki.org/glyph/u908a-ue0102.svg',
            'https://glyphwiki.org/glyph/u908a-ue0103.svg',
            'https://glyphwiki.org/glyph/u908a-ue0104.svg',
            'https://glyphwiki.org/glyph/u908a-ue0105.svg',
            'https://glyphwiki.org/glyph/u908a-ue0106.svg',
            'https://glyphwiki.org/glyph/u908a-ue0107.svg',
            'https://glyphwiki.org/glyph/u908a-ue010a.svg',
            'https://glyphwiki.org/glyph/u908a-ue010b.svg',
            'https://glyphwiki.org/glyph/u908a-ue010c.svg',
            'https://glyphwiki.org/glyph/u908a-ue010d.svg',
            'https://glyphwiki.org/glyph/u908a-ue010e.svg',
            'https://glyphwiki.org/glyph/u908a-ue0111.svg',
            'https://glyphwiki.org/glyph/u908a-ue0112.svg',
            'https://glyphwiki.org/glyph/u908a-ue0113.svg',
            'https://glyphwiki.org/glyph/u908a-ue0114.svg',
            'https://glyphwiki.org/glyph/u908a-var-001.svg',
            'https://glyphwiki.org/glyph/u908a-var-002.svg',
            'https://glyphwiki.org/glyph/cbeta-21066.svg',
            'https://glyphwiki.org/glyph/cbeta-27879.svg',
            'https://glyphwiki.org/glyph/cbeta-27882.svg',
            'https://glyphwiki.org/glyph/cbeta-30999.svg',
            'https://glyphwiki.org/glyph/g-bk101914.svg',
            'https://glyphwiki.org/glyph/gt-78666.svg',
            'https://glyphwiki.org/glyph/jmj-058864.svg',
            'https://glyphwiki.org/glyph/juki-bd0e.svg',
        ];
        this.words = urlList.map((element, index) => {
            return new Word(index, element);
        });

    }
    getAllWord() {
        return this.words.sort(() => Math.random() - 0.5);
    }
    getWordById(id: number) {
        return this.words.find((e) => {
            return e.id === id;
        });
    }
}
