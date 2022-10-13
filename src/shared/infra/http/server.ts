import { app } from ".";
import { logger } from "../../../utils/logger";

app.listen(3333, () => {
    logger.info('listening on port 3333');
});