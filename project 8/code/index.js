// Згенерувати теги через javascript. Додати на сторінку семантичні теги та метагеги опису сторінки. 

// Прописати стилі для для елементів використовуючи css id та класи

// При натиску на тег ми можемо доти будь-який контент і він зберігається в тегу

// https://ru.megaindex.com/blog/files/images/semantic-markup-example.jpg



const createTag = (tagName, className, text) => {
    const tag = document.createElement(tagName);
    tag.classList.add(className);
    tag.textContent = text;
    return tag;
}

const body = document.querySelector("body");
body.textContent = "body";

const header = createTag("header", "header", "header");
document.body.append(header);
    header.append(createTag("nav", "header-menu", "nav"));

const columns = createTag("div", "columns", "");
document.body.append(columns);

    const section = createTag("div", "section", "section");
    columns.append(section);

        section.append(createTag("header", "section-header", "header"));
        
        const article = createTag("div", "article", "article");
        section.append(article);

        article.append(createTag("header", "article-header", "header"));
        article.append(createTag("p", "article-title", "p"));
        
        const column = createTag("div", "columns", "");
        article.append(column);
            column.append(createTag("p", "article-title", "p"));
            column.append(createTag("div", "article-aside", "aside"));

        article.append(createTag("footer", "article-footer", "footer"));


        section.append(createTag("footer", "section-footer", "footer"));

    const sidebar = createTag("div", "section", "section");
    columns.append(sidebar);

            sidebar.append(createTag("header", "sidebar-header", "header"));

            sidebar.append(createTag("nav", "sidebar-menu", "nav"));



// document.body.replaceChildren('body', header);
// document.body.contentEditable = true;

